import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/b2c')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('accounts')
  getHello(): string {
    return this.appService.getHello();
  }
}
