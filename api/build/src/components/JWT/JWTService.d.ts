import JWTPayload from '../../common/types/JWTPayload';
declare class JWTService {
    private SECRET_KEY;
    verify(token: string): string | import("jsonwebtoken").JwtPayload;
    generateAccessToken(payload: JWTPayload): string;
    generateRefreshToken(payload: JWTPayload): string;
    decodeToken(token: string): string | import("jsonwebtoken").JwtPayload;
}
export default JWTService;
