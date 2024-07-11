interface BaseResponse<T> {
  message: string;
  data: T;
  statusCode: number;
}

export default BaseResponse;
