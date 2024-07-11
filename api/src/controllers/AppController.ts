import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import AppService from '../services/AppService';

@Controller()
class AppController {
  constructor(private appService: AppService) {}
  @Get()
  @ApiTags('root')
  public rootController(): string {
    return this.appService.get();
  }
}

export default AppController;
