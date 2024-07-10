import { Request, Response } from 'express';
declare class ControllerAdvice {
    protected request: Request;
    protected response: Response;
    constructor(req: Request, res: Response);
}
export default ControllerAdvice;
