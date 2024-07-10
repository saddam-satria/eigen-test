import { Module } from '@nestjs/common';
import JWTService from './JWTService';

@Module({
  providers: [JWTService],
  exports: [JwtModule],
})
class JwtModule {}

export default JwtModule;
