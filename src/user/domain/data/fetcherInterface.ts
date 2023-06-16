interface FetcherResponse<T> {
  isLoading: boolean;
  error: Error | undefined;
  data: T | undefined;
}

type FetcherPromise<T> = () => Promise<T>;
type FetcherInterface<T> = (
  key: string | null,
  promise: FetcherPromise<T>,
) => FetcherResponse<T>;

export type { FetcherPromise, FetcherResponse, FetcherInterface };
