import { Module } from '@nestjs/common';
import PasswordEncoderService from './PasswordEncoderService';

@Module({
  providers: [PasswordEncoderService],
  exports: [PasswordEncoderModule],
})
class PasswordEncoderModule {}

export default PasswordEncoderModule;
