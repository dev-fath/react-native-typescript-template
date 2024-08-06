import { SupportLocalesType } from 'contexts/I18nContext';

export const numberFormatter = {
  currency: (value: number, fractionDigits = 0, locale: Intl.LocalesArgument = 'en-GB') => {
    return value.toLocaleString(locale, { maximumFractionDigits: fractionDigits });
  },
  getCurrencySymbol: (locale: SupportLocalesType) => {
    return locale === 'de-DE' ? '€' : '£';
  },

  paddingZero: (value: number, digits: number, toLocaleString = false) => {
    const prefix = value < 0 ? '-' : '';
    const absoluteValue = Math.abs(value);
    3;

    if (toLocaleString) {
      return `${prefix}${
        digits < 2
          ? absoluteValue.toLocaleString('de')
          : absoluteValue.toLocaleString('de').padStart(digits, '0')
      }`;
    }
    return `${prefix}${
      digits < 2 ? absoluteValue.toString(10) : absoluteValue.toString(10).padStart(digits, '0')
    }`;
  },
};
