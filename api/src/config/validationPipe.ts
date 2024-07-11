import {
  HttpException,
  HttpStatus,
  ValidationPipeOptions,
} from '@nestjs/common';

export const validationPipeOpt: ValidationPipeOptions = {
  exceptionFactory(errors) {
    throw new HttpException(
      {
        statusCode: 400,
        message: errors.map((err) => Object.values(err.constraints)[0]),
        data: null,
      },
      HttpStatus.BAD_REQUEST,
    );
  },
};
