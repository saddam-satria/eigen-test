import { HttpException } from '@nestjs/common';
import MessagesResponse from '../common/MessageProperties';
import ResponseService from './BaseResponse';

class AbstractService {
  getMessage(key: string, lang: 'en' | 'in') {
    return MessagesResponse(key, lang);
  }

  errorHandler(message: string, statusCode: number) {
    throw new HttpException(
      ResponseService.send(statusCode, message, null),
      statusCode,
    );
  }
}

export default AbstractService;
