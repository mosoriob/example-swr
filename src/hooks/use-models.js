import useSWR from "swr";
import fetcher from "../libs/fetch";

export function useCovidCountryConfirmed(country) {
  const { data, error } = useSWR(
    `https://api.covid19api.com/dayone/country/${country}/status/confirmed`,
    fetcher,
  );
  return {
    country: data,
    isLoading: !error && !data,
    isError: error,
  };
}
