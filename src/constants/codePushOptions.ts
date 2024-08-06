// import { Platform } from 'react-native';
// import CodePush, { CodePushOptions } from 'react-native-code-push';
// import envConfig from 'react-native-config';
//
// export const codePushOptions: CodePushOptions = {
//   deploymentKey: Platform.OS === 'ios' ? envConfig.CODE_PUSH_KEY_IOS : envConfig.CODE_PUSH_KEY_AOS,
//   checkFrequency: CodePush.CheckFrequency.ON_APP_START,
//   // 언제 업데이트를 체크하고 반영할지를 정한다.
//   // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
//   // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
//   // updateDialog: {
//   //   appendReleaseDescription: true,
//   //   // 업데이트를 할지 안할지 여부에 대한 노출 (잠수함 패치의 경우 false)
//   //   title: 'new version is exist',
//   //   optionalUpdateMessage: '업데이트 하시겠습니까?',
//   //   optionalIgnoreButtonLabel: '다음에',
//   //   optionalInstallButtonLabel: '업데이트하기',
//   // },
//   installMode: CodePush.InstallMode.IMMEDIATE,
//   // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
// };
