export class PropostaModel {
    constructor(
        public id: string,
        public nomeCompleto: string,
        public email: string,
        public telefone: string,
        public tipoDeServico: string,
        public tipoDeSistema: string,
        public descricao: string
    ) {}
}