import useSWR from 'swr';
import {
  type FetcherPromise,
  type FetcherResponse,
} from '../../domain/data/fetcherInterface';

function useSwrFetcher<T>(
  key: string,
  promise: FetcherPromise<T>,
): FetcherResponse<T> {
  const { data, error, isLoading } = useSWR(key, promise);

  return {
    data,
    error,
    isLoading,
  };
}

export default useSwrFetcher;
