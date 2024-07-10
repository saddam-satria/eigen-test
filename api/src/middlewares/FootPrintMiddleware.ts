import { Injectable, NestMiddleware } from '@nestjs/common';
import { AllowedIP } from 'src/config/constant';
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';
import AbstractService from 'src/components/AbstractService';
import ResponseService from 'src/components/BaseResponse';

@Injectable()
class FootPrintMiddleware extends AbstractService implements NestMiddleware {
  private allowedIP: string[] = AllowedIP;
  use(req: Request, res: Response, next: NextFunction) {
    const reqIP = req.ip;

    if (this.allowedIP.length === 0) {
      return next();
    }

    if (this.allowedIP.includes(reqIP)) {
      return next();
    }

    return res
      .status(HttpStatus.BAD_REQUEST)
      .json(
        ResponseService.send<null>(
          HttpStatus.FORBIDDEN,
          this.getMessage('NOT_ALLOWED', 'en'),
          null,
        ),
      );
  }
}

export default FootPrintMiddleware;
