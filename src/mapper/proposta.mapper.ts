import { PropostaModel } from "src/model/proposta.model";

export class PropostaMapper {

    public static mapToModelList(registroList: any[], usuarios: any[]): PropostaModel[] {
        return registroList.map(item => {
            const usuariosLidos = usuarios.filter(user => item.usuariosLidos.some(usuarioLido => usuarioLido == user.id));
            return this.mapToModel(item, usuariosLidos);
        });
    }

    public static mapToModel(registro: any, usuariosLidos): PropostaModel {
        return new PropostaModel(registro._id, registro.nomeCompleto, registro.email, registro.telefone, registro.tipoDeServico, registro.tipoDeSistema, registro.descricao, usuariosLidos);
    }
}