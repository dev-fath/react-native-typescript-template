import axios, {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import envConfig from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { changeShowLoading } from 'redux/loading/showLoadingSlice';
import { store } from 'redux/store/store';

import { navigationRef } from 'screens/navigation/RootStackNavigation';

import { isTokenExpired } from 'utils/auth/isTokenExpired';

import { IResponse } from 'interfaces/api-response.interface';
import { IAuthInfo } from 'interfaces/auth.interface';

import { BASE_URL } from 'constants/api/apiUrls';
import { StorageKeys } from 'constants/storageKeys';

async function requestReauth(req: AxiosRequestConfig<any>) {
  if (!req.headers) {
    return;
  }

  if (isTokenExpired(await AsyncStorage.getItem(StorageKeys.EXPIRED_TIME))) {
    const refreshToken = await AsyncStorage.getItem(StorageKeys.REFRESH_TOKEN);

    req.headers['Authorization'] = `Bearer ${refreshToken}`;

    try {
      const refreshResult = await axios.get<AxiosResponse<IAuthInfo>>(`${BASE_URL}/auth/refresh`, {
        headers: req.headers,
      });

      if (refreshResult.status >= 200 && refreshResult.status < 400) {
        await storeData(StorageKeys.EXPIRED_TIME, refreshResult.data.data.expiredTime);
        await storeData(StorageKeys.ACCESS_TOKEN, refreshResult.data.data.accessToken);
        await storeData(StorageKeys.REFRESH_TOKEN, refreshResult.headers.refresh_token as string);

        return refreshResult.data.data;
      } else {
        await AsyncStorage.multiRemove([
          StorageKeys.REFRESH_TOKEN,
          StorageKeys.ACCESS_TOKEN,
          StorageKeys.EXPIRED_TIME,
        ]);
        navigationRef.navigate('OnBoardingStack', { screen: 'SignInUp' });
      }
    } catch (e) {
      console.log(e);
      await AsyncStorage.multiRemove([
        StorageKeys.REFRESH_TOKEN,
        StorageKeys.ACCESS_TOKEN,
        StorageKeys.EXPIRED_TIME,
      ]);
      navigationRef.navigate('OnBoardingStack', { screen: 'SignInUp' });
    }
  }
}

export default function axiosInterceptor<T>(interceptors: {
  request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
  response: AxiosInterceptorManager<AxiosResponse<IResponse<T>>>;
}) {
  interceptors.response.use(
    (res) => {
      store.dispatch(changeShowLoading(false));
      return res;
    },
    (error) => {
      store.dispatch(changeShowLoading(false));
      return Promise.reject(error);
    },
  );

  interceptors.request.use(async (req) => {
    const baseUrlByUserCountry = store.getState().persistedReducer.meReducer.countryUrl;

    if (baseUrlByUserCountry !== envConfig.API_BASE_URL_UK) {
      req.url = req.url.replace(envConfig.API_BASE_URL_UK, baseUrlByUserCountry);
    }

    if (!req.url?.includes('/charger/status')) {
      store.dispatch(changeShowLoading(true));
    }

    const accessToken = (await AsyncStorage.getItem(StorageKeys.ACCESS_TOKEN)) ?? '';

    if (req.headers) {
      if (req.url?.includes('/auth') || req.url?.includes('/countries')) {
        return req;
      }

      const newAccessToken = await requestReauth(req);

      req.headers['x-auth-token'] = '';
      req.headers['Authorization'] = `Bearer ${newAccessToken?.accessToken ?? accessToken}`;
    }
    return req;
  });

  return interceptors;
}

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
