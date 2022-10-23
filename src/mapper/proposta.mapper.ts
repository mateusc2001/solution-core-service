import { PropostaModel } from "src/model/proposta.model";

export class PropostaMapper {

    public static mapToModelList(registroList: any[]): PropostaModel[] {
        return registroList.map(item => this.mapToModel(item));
    }

    public static mapToModel(registro: any): PropostaModel {
        return new PropostaModel(registro._id, registro.nomeCompleto, registro.email, registro.telefone, registro.tipoDeServico, registro.tipoDeSistema, registro.descricao);
    }
}