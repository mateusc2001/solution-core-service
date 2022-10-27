import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proposta, PropostaDocument } from './schema/proposta.schema';
import { Visualizacao, VisualizacaoDocument } from './schema/visualizacao.schema';

@Injectable()
export class AppService {

  constructor(@InjectModel(Proposta.name) private readonly propostaModel: Model<PropostaDocument>,
  @InjectModel(Visualizacao.name) private readonly visualizacaoModel: Model<VisualizacaoDocument>) { }

  async create(obj) {
    return await this.propostaModel.create(obj);
  }

  async find() {
    return await this.propostaModel.find();
  }

  async addVizualizacao() {
    return await this.visualizacaoModel.create({});
  }

  async findVizualizacoes() {
    return await this.visualizacaoModel.find();
  }
}
