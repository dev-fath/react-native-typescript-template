import { QueryObserverOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { IResponse } from 'interfaces/api-response.interface';

export interface IBaseRequestParams<TError = unknown> {
  onError?: (err: TError) => void;
}

export interface IQueryRequestParams<
  TVariables,
  TData = unknown,
  TError = AxiosError<IResponse<TData>>,
> extends IBaseRequestParams<TError> {
  variables?: TVariables;
  onSuccess?: (data: IResponse<TData>) => void;
  refetchInterval?: QueryObserverOptions['refetchInterval'];
  enabled?: boolean;
}

export interface IPostRequestParams<
  TVariables,
  TData = unknown,
  TError = AxiosError<IResponse<TData>>,
> extends IBaseRequestParams<TError> {
  onSuccess?: (data: IResponse<TData>, variables: TVariables, context: unknown) => void;
}
