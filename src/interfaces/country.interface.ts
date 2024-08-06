export type CountryUrlKeyType = 'GB' | 'DE';

export interface ICountryItem {
  id: number;
  name: string;
  internationalPhoneCode: string;
  countryCode?: CountryUrlKeyType;
}
