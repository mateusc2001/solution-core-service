import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catchError, firstValueFrom } from 'rxjs';
import { Proposta, PropostaDocument } from './schema/proposta.schema';
import { Visualizacao, VisualizacaoDocument } from './schema/visualizacao.schema';
import { HttpService } from '@nestjs/axios';
import { PropostaMapper } from './mapper/proposta.mapper';
@Injectable()
export class AppService {

  constructor(private httpService: HttpService, @InjectModel(Proposta.name) private readonly propostaModel: Model<PropostaDocument>,
    @InjectModel(Visualizacao.name) private readonly visualizacaoModel: Model<VisualizacaoDocument>) { }

  async create(obj) {
    return await this.propostaModel.create(obj);
  }

  async find() {
    const propostas = await this.propostaModel.find();
    const usuarioIdList = propostas.map(item => item.usuariosLidos).flat();
    const semRepetidos = usuarioIdList.filter((este, i) => usuarioIdList.indexOf(este) === i);

    const url = `http://user.service.solutioncore.com.br/user/id-list`;
    const { data }: any = await firstValueFrom(
      this.httpService.get<any>(url, { params: { id: semRepetidos } }).pipe(
        catchError((error: any) => {
          throw 'An error happened!';
        }),
      ),
    );
    return PropostaMapper.mapToModelList(propostas, data);
  }

  async addUsuarioLido(registerId: string, userId: string) {
    return await this.propostaModel.updateOne({ _id: registerId }, { $push: { usuariosLidos: userId } });
  }

  async addVizualizacao() {
    return await this.visualizacaoModel.create({});
  }

  async findVizualizacoes() {
    return await this.visualizacaoModel.find();
  }
}
