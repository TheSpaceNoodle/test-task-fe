export interface CountryData {
  flagUrl: string;
  population: Population[];
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
}

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

interface Population {
  year: number;
  value: number;
}
