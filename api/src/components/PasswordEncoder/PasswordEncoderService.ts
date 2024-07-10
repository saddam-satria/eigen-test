import { Injectable } from '@nestjs/common';
import { hash, compare, genSalt } from 'bcrypt';

@Injectable()
class PasswordEncoderService {
  async generate(password: string) {
    const salt = await genSalt(10);
    return await hash(password, salt);
  }
  async matches(passwordPlain: string, passwordHash: string) {
    return await compare(passwordPlain, passwordHash);
  }
}

export default PasswordEncoderService;
