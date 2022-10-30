import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

export type PropostaDocument = Proposta & Document;

@Schema()
export class Proposta {

    @Prop({ required: true })
    nomeCompleto: string;
    
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    telefone: string;

    @Prop({ required: true })
    tipoDeServico: string;

    @Prop({ required: true })
    tipoDeSistema: string;

    @Prop({ required: true })
    descricao: string;

    @Prop()
    usuariosLidos: string[];
}

export const PropostaSchema = SchemaFactory.createForClass(Proposta);