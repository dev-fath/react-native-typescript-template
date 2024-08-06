import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

/**
 *
 * @param expiredTime
 * @description UTC 기준
 */
export const isTokenExpired = (expiredTime: string | null) => {
  return dayjs.utc().diff(expiredTime || '') > 0;
};
