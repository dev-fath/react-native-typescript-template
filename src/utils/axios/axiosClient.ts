import axios from 'axios';
import { ICustomAxiosInstance } from 'types/axios';

import axiosInterceptor from 'utils/axios/axiosInterceptor';

import { BASE_URL } from 'constants/api/apiUrls';

const axiosClient: ICustomAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors = axiosInterceptor(axiosClient.interceptors);

export default axiosClient;
