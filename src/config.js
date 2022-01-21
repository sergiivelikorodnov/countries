const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,flags,population,capital,region';

export const searchByCountry = (country) => BASE_URL + 'name/' + country;

export const filterByCode = (countryCodes) =>
  BASE_URL + 'alpha?codes=' + countryCodes.join(',');
