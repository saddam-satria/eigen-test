import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import ErrorException from '../../common/ErrorException';

class JWTException {
  constructor(error) {
    if (error instanceof TokenExpiredError) {
      throw new ErrorException('Token Expired');
    }
    if (error instanceof JsonWebTokenError) {
      throw new ErrorException('Token Invalid');
    }
  }
}

export default JWTException;
