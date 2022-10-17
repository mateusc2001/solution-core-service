import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() obj) {
    return this.appService.create(obj);
  }

  @Get()
  async find() {
    const response: any = await this.appService.find();
    return {
      resultados: response.length,
      data: response
    }
  }
}
