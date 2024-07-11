import { Injectable } from '@nestjs/common';
import BaseResponse from '../types/shared/BaseResponse';

@Injectable()
class ResponseService {
  public send<T>(
    statusCode: number,
    message: string,
    data: T,
  ): BaseResponse<T> {
    return {
      data,
      message,
      statusCode,
    };
  }
  public static send<T>(
    statusCode: number,
    message: string,
    data: T,
  ): BaseResponse<T> {
    return {
      data,
      message,
      statusCode,
    };
  }
}

export default ResponseService;
