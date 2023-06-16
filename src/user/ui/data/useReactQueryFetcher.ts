import { useQuery } from 'react-query';
import {
  type FetcherPromise,
  type FetcherResponse,
} from '../../domain/data/fetcherInterface';

function useReactQueryFetcher<T>(
  key: string,
  promise: FetcherPromise<T>,
): FetcherResponse<T> {
  const { data, error, isLoading } = useQuery(key, promise, { retry: false });

  return {
    data,
    error: error as Error | undefined,
    isLoading,
  };
}

export default useReactQueryFetcher;
