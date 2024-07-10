import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  get(): string {
    return 'welcome to nest boilerplate';
  }
}

export default AppService;
