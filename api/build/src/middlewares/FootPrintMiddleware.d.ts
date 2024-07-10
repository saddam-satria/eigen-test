import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import AbstractService from 'src/components/AbstractService';
declare class FootPrintMiddleware extends AbstractService implements NestMiddleware {
    private allowedIP;
    use(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
}
export default FootPrintMiddleware;
