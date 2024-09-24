import { LineChart } from '@mui/x-charts';
import { useCallback } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import CountryApi from '../api/CountryApi';
import { CountryData } from '../models/CountryData';
import { countryRoute } from '../router';

const CountryInfo = () => {
  const { countryCode } = countryRoute.useParams();

  const { data, isLoading }: UseQueryResult<CountryData> = useQuery({
    queryKey: ['country-detailed', countryCode],
    queryFn: () => CountryApi.fetchCountry(countryCode),
  });

  const populationYears = useCallback(() => {
    if (data) {
      return data.population.map((data) => data.year);
    }
  }, [data])();

  const populationSeries = useCallback(() => {
    if (data) {
      return data.population.map((data) => data.value);
    }
  }, [data])();

  return (
    <article>
      {isLoading ? (
        <span aria-busy="true">Fetching country...</span>
      ) : (
        <>
          <header className="flex fl-space-between fl-wrap">
            <div className="flex fl-gap-10">
              <img src={data?.flagUrl} alt={`${data?.officialName} flag`} style={{ height: '35px' }} />
              <h2>{data?.officialName}</h2>
            </div>

            <div className="flex fl-gap-20">
              <span>{data?.commonName}</span>
              <span>{data?.countryCode}</span>
            </div>
          </header>

          <h3>Bordering countries:</h3>
          <div className="flex fl-wrap fl-gap-10">
            {data?.borders.map((country) => (
              <a key={country.countryCode} href={country.countryCode} className="secondary">
                {country.commonName}
              </a>
            ))}
          </div>

          <h3>Population Chart:</h3>
          <LineChart
            xAxis={[{ data: populationSeries }]}
            series={[{ data: populationYears }]}
            height={250}
            sx={{
              //change left yAxis label styles
              '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
                strokeWidth: '0.4',
                fill: '#ffffff',
              },
              // change all labels fontFamily shown on both xAxis and yAxis
              '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel': {
                fontFamily: 'Roboto',
              },
              // change bottom label styles
              '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
                strokeWidth: '0.5',
                fill: '#ffffff',
              },
              // bottomAxis Line Styles
              '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
                stroke: '#ffffff',
                strokeWidth: 0.4,
              },
              // leftAxis Line Styles
              '& .MuiChartsAxis-left .MuiChartsAxis-line': {
                stroke: '#ffffff',
                strokeWidth: 0.4,
              },
            }}
          />
        </>
      )}
    </article>
  );
};

export default CountryInfo;
