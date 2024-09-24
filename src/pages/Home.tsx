import { useQuery } from 'react-query';

import CountryApi from '../api/CountryApi';
import { Country } from '../models/Country';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['countries-list'],
    queryFn: CountryApi.fetchCountries,
  });

  return (
    <div>
      {isLoading ? (
        <span aria-busy="true">Fetching countries...</span>
      ) : (
        data && (
          <div className="flex fl-wrap fl-gap-10">
            {data.map((country: Country) => (
              <a key={country.countryCode} href={country.countryCode} className="secondary">
                {country.name}
              </a>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
