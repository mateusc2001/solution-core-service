import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

export type VisualizacaoDocument = Visualizacao & Document;

@Schema({timestamps: true})
export class Visualizacao {

    @Prop() createdAt?: Date;
}

export const VisualizacaoSchema = SchemaFactory.createForClass(Visualizacao);