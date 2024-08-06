export interface IResponse<TData = unknown> {
  status: number;
  message: string;
  data: TData;
  code?: string;
}
