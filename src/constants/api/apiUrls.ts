import envConfig from 'react-native-config';

export const BASE_URL = envConfig.API_BASE_URL_UK;

export const userUrls = {
  Login: '/auth/login',
  FindPassword: '/auth/password/email/send',
  CheckEmailCode: '/auth/password/email/check',
  SetNewPassword: '/auth/password',
  SignUp: '/auth/signup',
  SendEmailCode: '/auth/signup/email/send',
  PostSignUpEmailCheck: '/auth/signup/email/check',
  LogOut: '/auth/logout',
  DuplicateEmail: '/auth/email/duplicate?email=$EMAIL',
  DuplicatePhone: '/auth/phone/duplicate',
  Me: '/users/me',
  PasswordVerify: '/users/me/password/verify',
  ChangePassword: '/users/me/password',
  ChangeUserName: '/users/me/username',
  ChangePhoneNumber: '/users/me/phone',
  Countries: '/countries',
  Withdrawal: '/users/withdrawal',
  TermsAgreement: '/users/agreement',
  Faq: '/faq',
  Qna: '/qna/list',
  QnaDetail: '/qna/detail/$qnaSeq',
  ProfilePhoto: '/users/profilePhoto',
  QnaQuestion: '/qna/question',
};

export const notificationUrls = {
  registerPushToken: '/user/push-token',
  // updatePushToken: '/user/push-token',  // TODO : registerPushToken api에서 동일한 작업을 하고있어서 ..
  removePushToken: '/user/push-token',
  notificationList: '/alarm/list',
  notificationRemoveAll: '/alarm',
  notificationSettings: '/alarm/settings',
};
