import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { PropostaMapper } from './mapper/proposta.mapper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  create(@Body() obj) {
    return this.appService.create(obj);
  }

  @Get()
  async find() {
    const response: any = await this.appService.find();
    return response;
  }

  @Put('/proposta-id/:propostaId/user-id/:userId')
  async addUsuarioLido(@Param('propostaId') propostaId: string,
    @Param('userId') userId: string): Promise<any> {
      return await this.appService.addUsuarioLido(propostaId, userId);
  }

  @Post('/visualizacao')
  createVisualizacao() {
    return this.appService.addVizualizacao();
  }

  @Get('/visualizacao')
  async findVisualizacoes() {
    const response: any = await this.appService.findVizualizacoes();
    return response;
  }
}
