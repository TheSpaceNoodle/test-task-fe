import { Country } from '../models/Country.ts';
import { CountryData } from '../models/CountryData.ts';
import APIWrapper from './APIWrapper.ts';

class CountryApi extends APIWrapper {
  fetchCountries = (): Promise<Country[]> => this.get({ url: `${import.meta.env.VITE_BACKEND_URL}` });

  fetchCountry = (countryCode: string): Promise<CountryData> =>
    this.get({ url: `${import.meta.env.VITE_BACKEND_URL}/${countryCode}` });
}

export default new CountryApi();
