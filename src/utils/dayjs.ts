import dayjs from 'dayjs';

import { SupportLocalesType } from 'contexts/I18nContext';

/**
 * dayjs 객체 현재 날짜 전달하면 기준일에 대한 객체 반환. 국가별로 다르게 설정해야하기 때문에, 국가정보 필수로 받아야 함
 * @param currentDate 기준 일자
 */
const getCurrentDateObject = (currentDate: dayjs.Dayjs) => {
  return {
    year: currentDate.get('year'),
    month: currentDate.get('month'),
    date: currentDate.get('date'),
    day: currentDate.get('day'),
    lastDate: currentDate.daysInMonth(),
    hour: currentDate.get('hour'),
    minute: currentDate.get('minute'),
    second: currentDate.get('second'),
    millisecond: currentDate.get('millisecond'),
    formatted: currentDate.format('YYYY-MM-DD HH:mm:ss.SSS'),
  };
};

const setLocale = (country: SupportLocalesType) => {
  switch (country) {
    case 'en-GB':
      dayjs.locale('en-gb');
      break;
    case 'de-DE':
      dayjs.locale('de');
      break;
    default:
      dayjs.locale('en-gb');
  }
};
export { getCurrentDateObject, setLocale };
