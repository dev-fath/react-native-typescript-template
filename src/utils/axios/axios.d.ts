import {
  AxiosDefaults,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

declare module 'axios' {
  export interface IAxiosInstance {
    defaults: AxiosDefaults;
    interceptors: {
      request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse>;
    };

    getUri(config?: AxiosRequestConfig): string;

    request<T = unknown>(config: AxiosRequestConfig): Promise<T>;

    get<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    delete<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    head<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    options<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    post<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    put<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    patch<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    postForm<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    putForm<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;

    patchForm<T = unknown, R = AxiosResponse<T>, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;
  }
}
