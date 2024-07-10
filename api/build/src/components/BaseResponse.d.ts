import TBaseResponse from 'src/common/types/BaseResponse';
declare class ResponseService {
    send<T>(statusCode: number, message: string, data: T): TBaseResponse<T>;
    static send<T>(statusCode: number, message: string, data: T): TBaseResponse<T>;
}
export default ResponseService;
