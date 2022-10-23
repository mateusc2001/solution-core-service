import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PropostaMapper } from './mapper/proposta.mapper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() obj) {
    return this.appService.create(obj);
  }

  @Get()
  async find() {
    const response: any = PropostaMapper.mapToModelList(await this.appService.find());
    return response;
  }
}
