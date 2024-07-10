import { verify, sign, decode } from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/constant';
import JWTException from './JWTException';
import JWTPayload from '../../common/types/JWTPayload';

class JWTService {
  private SECRET_KEY = SECRET_KEY;
  verify(token: string) {
    try {
      return verify(token, SECRET_KEY);
    } catch (error) {
      throw new JWTException(error);
    }
  }
  generateAccessToken(payload: JWTPayload) {
    try {
      return sign(payload, this.SECRET_KEY, { expiresIn: '15m' });
    } catch (error) {
      throw new JWTException(error);
    }
  }
  generateRefreshToken(payload: JWTPayload) {
    try {
      return sign(payload, this.SECRET_KEY, { expiresIn: '15d' });
    } catch (error) {
      throw new JWTException(error);
    }
  }
  decodeToken(token: string) {
    try {
      this.verify(token);
      return decode(token);
    } catch (error) {
      throw new JWTException(error);
    }
  }
}

export default JWTService;
