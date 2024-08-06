import { RetryValue } from '@tanstack/query-core/build/lib/retryer';
import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// TODO : 리트라이 대상 코드 지정
const retryCodes = [500];
const retryFunction: RetryValue<AxiosError> = (failureCount: number, error: AxiosError) => {
  if (!error.response) {
    return false;
  }
  if (failureCount > 5) {
    return false;
  }
  // if (retryCodes.includes(error.response.status)) {
  //   return failureCount < 2;
  // }
  return retryCodes.includes(error.response.status);
};
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: retryFunction as RetryValue<unknown>,
    },
    queries: {
      retry: retryFunction as RetryValue<unknown>,
    },
  },
});

export default queryClient;
