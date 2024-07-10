import { Injectable } from '@nestjs/common';
import TBaseResponse from 'src/common/types/BaseResponse';

@Injectable()
class ResponseService {
  public send<T>(
    statusCode: number,
    message: string,
    data: T,
  ): TBaseResponse<T> {
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
  ): TBaseResponse<T> {
    return {
      data,
      message,
      statusCode,
    };
  }
}

export default ResponseService;
