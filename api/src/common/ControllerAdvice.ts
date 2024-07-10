import { Request, Response } from 'express';

class ControllerAdvice {
  protected request: Request;
  protected response: Response;

  constructor(req: Request, res: Response) {
    this.request = req;
    this.response = res;
  }
}

export default ControllerAdvice;
