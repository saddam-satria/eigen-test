import JWTService from './JWTService';

describe('jwt testing', () => {
  const jwtService = new JWTService();
  const payload = '08888';
  try {
    jwtService.verify('sadasdasda');
  } catch (error) {
    it('should return contains', () => {
      expect(error.message).toContain('Token Invalid');
    });
  }

  let accessToken: string;

  try {
    accessToken = jwtService.generateAccessToken({
      phonenumber: payload,
    });
    it('should return jwt', () => {
      expect(accessToken).toContain('ey');
    });
  } catch (error) {}

  try {
    const decodedToken = jwtService.decodeToken(accessToken);

    it('should return equal', () => {
      expect(decodedToken['phonenumber']).toEqual(payload);
    });
  } catch (error) {}
});
