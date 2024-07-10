type BaseResponse<T> = {
    message: string;
    statusCode: number;
    data: T;
};
export default BaseResponse;
