import { Platform } from 'react-native';
import {
  AndroidPermission,
  IOSPermission,
  PERMISSIONS,
  Permission,
  PermissionStatus,
  RESULTS,
  check,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

const permissionInit = async () => {
  if (Platform.OS === 'android') {
    await requestAndroidPermissionsInit();
  } else if (Platform.OS === 'ios') {
    await requestIOSPermissionsInit();
  }
};

const REQUIRED_PERMISSIONS: Record<'ios' | 'aos', Permission[]> = {
  ios: [],
  aos: [],
};

const SELECTION_PERMISSIONS: { ios: Permission[]; aos: Permission[] } = {
  ios: [
    PERMISSIONS.IOS.CAMERA,
    // PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ],
  aos: [
    PERMISSIONS.ANDROID.CAMERA,
    // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    // PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    // PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ],
};

const requestIOSPermissionsInit = async () => {
  const requestPermissionList: IOSPermission[] = [
    PERMISSIONS.IOS.CAMERA,
    // PERMISSIONS.IOS.LOCATION_ALWAYS,
    // PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ];

  await requestPermission(requestPermissionList);
  // 알림설정파트
  // console.log(requestNotifications(['alert', 'sound']));
};
const requestAndroidPermissionsInit = async () => {
  const requestPermissionList: AndroidPermission[] = [
    PERMISSIONS.ANDROID.CAMERA,
    // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    // PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION, // 백그라운드 위치요청은 위치정보 접근 권한이 '항상허용'이어야 함

    // PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    // PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ];

  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      requestPermissionList.push(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
      requestPermissionList.push(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    }
    if (Platform.Version < 33) {
      requestPermissionList.push(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    }
    if (Platform.Version <= 28) {
      requestPermissionList.push(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    }
  }
  await requestPermission(requestPermissionList);
  // await requestAndroidBackgroundLocation();
};

// 백그라운드 권한요청 별도 처리
// const requestAndroidBackgroundLocation = async () => {
// const locationPermissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
// if (locationPermissionStatus !== RESULTS.GRANTED) {
// alert 띄우고 권한설정 화면으로 이동
// openSettings().catch(() => console.warn('cannot open settings'));
// }
// permissionProcessor(locationPermissionStatus);
// };

const requestPermission = async (requestPermissionList: Permission[]) => {
  const permissionStatus = await requestMultiple(requestPermissionList);
  for (const permissionKey of requestPermissionList) {
    permissionProcessor(permissionStatus[permissionKey]);
  }
};

const isPermissionGranted = async (checkPermissionList: Permission[]) => {
  const permissionStatus = await checkMultiple(checkPermissionList);

  return checkPermissionList.every((key) => {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        ['granted', 'limited'].includes(permissionStatus[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES]);
      }
      if (Platform.Version > 33) {
        ['granted', 'limited'].includes(
          permissionStatus[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
        );
      }
      if (Platform.Version <= 28) {
        ['granted', 'limited'].includes(
          permissionStatus[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
        );
      }
    }

    return permissionStatus[key] === 'granted' || permissionStatus[key] === 'limited';
  });
};

const notGrantedPermissions = async (checkPermissionList: Permission[]) => {
  const permissions = await checkMultiple(checkPermissionList);

  return checkPermissionList.filter((permission) => permissions[permission] !== 'granted');
};

const permissionProcessor = (permissionStatus: PermissionStatus) => {
  switch (permissionStatus) {
    case RESULTS.UNAVAILABLE:
      console.log('시용불가 기기 안내문 추가');
      break;
    case RESULTS.DENIED: {
      console.log('권한 미부여시 확인 ');
      break;
    }
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible');
      break;
    case RESULTS.GRANTED: {
      console.log('The permission is granted');
      break;
    }
    case RESULTS.BLOCKED: {
      // Alert.alert('필수권한을 설정해야합니다');
      console.log('필수요소인 경우, 설정화면으로 넘겨서 설정하도록 유도');
      // openSettings().catch(() => console.warn('cannot open settings'));
      break;
    }
  }
};
// const requestLocationPermissions = async () => {
//   if (Platform.OS === 'android') {
//     await requestPermission([
//       PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//       PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
//     ]);
//   } else if (Platform.OS === 'ios') {
//     await requestPermission([
//       PERMISSIONS.IOS.LOCATION_ALWAYS,
//       PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//     ]);
//   }
// };

const checkGalleryPermission = async () => {
  const platform = Platform.OS;
  const getPermissionList = async () => {
    if (platform === 'ios') {
      const iosCheckAbove14 = await check(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY);

      return iosCheckAbove14 === 'unavailable'
        ? [PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [PERMISSIONS.IOS.PHOTO_LIBRARY, PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY];
    } else {
      if (Platform.Version >= 33) {
        return [PERMISSIONS.ANDROID.READ_MEDIA_IMAGES];
      }
      if (Platform.Version < 33) {
        return [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
      }
      if (Platform.Version <= 28) {
        return [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
      }
    }
  };
  const permissionList = await getPermissionList();
  const isGranted = await isPermissionGranted(permissionList);
  if (!isGranted) {
    await requestMultiple(permissionList);
  }

  return isGranted;
};

const checkCameraPermission = async () => {
  const isGranted = await isPermissionGranted(
    Platform.OS === 'ios' ? [PERMISSIONS.IOS.CAMERA] : [PERMISSIONS.ANDROID.CAMERA],
  );
  if (!isGranted) {
    await requestMultiple(
      Platform.OS === 'ios' ? [PERMISSIONS.IOS.CAMERA] : [PERMISSIONS.ANDROID.CAMERA],
    );
  }
  return isGranted;
};

export {
  REQUIRED_PERMISSIONS,
  SELECTION_PERMISSIONS,
  checkCameraPermission,
  checkGalleryPermission,
  isPermissionGranted,
  notGrantedPermissions,
  permissionInit,
  requestAndroidPermissionsInit,
  requestIOSPermissionsInit,
  // requestLocationPermissions,
  requestPermission,
};
