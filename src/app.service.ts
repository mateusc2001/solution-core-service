import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proposta, PropostaDocument } from './schema/proposta.schema';

@Injectable()
export class AppService {

  constructor(@InjectModel(Proposta.name) private readonly propostaModel: Model<PropostaDocument>) { }

  async create(obj) {
    return await this.propostaModel.create(obj);
  }

  async find() {
    return await this.propostaModel.find();
  }
}
