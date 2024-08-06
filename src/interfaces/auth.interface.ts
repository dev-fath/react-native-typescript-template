export interface IAuthInfo {
  accessToken: string;
  expiredTime: string;
}

export interface IDuplicateAuthInfo {
  email?: string;
  hp?: string;
  name: string;
  openId: string;
}

export enum AuthenticationResultCodeEnum {
  DUPLICATION_MEMBER = 'DUPLICATION_MEMBER',
  SLEEP_MEMBER = 'SLEEP_MEMBER',
  STOP_MEMBER = 'STOP_MEMBER',
  WITHDRAW_MEMBER = 'WITHDRAW_MEMBER',
}

export interface IAgreedTerm {
  termsId: number;
  agree: boolean;
}

export interface IAuthRequestProps {
  hp: string;
  name: string;
  birth: string;
  gender?: 'F' | 'M' | '';
  ci: string;
  di: string;
  email: string;
  foreigner?: boolean;
  agrees: IAgreedTerm[];
  duplicated: boolean;
}
