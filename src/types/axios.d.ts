import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IResponse } from 'interfaces/api-response.interface';

interface ICustomAxiosRequestConfig<D> extends AxiosRequestConfig<D> {
  params?: D;
}

interface ICustomAxiosInstance extends AxiosInstance {
  getUri(config?: ICustomAxiosRequestConfig<any>): string;

  request<T, D, R = AxiosResponse<IResponse<T>>>(config: ICustomAxiosRequestConfig<D>): Promise<R>;

  get<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  delete<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  head<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  options<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  post<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  put<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  patch<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  postForm<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  putForm<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;

  patchForm<T, D, R = AxiosResponse<IResponse<T>>>(
    url: string,
    data?: D,
    config?: ICustomAxiosRequestConfig<D>,
  ): Promise<R>;
}
