import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposta, PropostaSchema } from './schema/proposta.schema';
import { Visualizacao, VisualizacaoSchema } from './schema/visualizacao.schema';
const isProd = process.env.NODE_ENV == 'prod'
const database = isProd ? 'db-solution-core' : 'db-solution-core-tst';
const uriDbConnection = `mongodb+srv://mateus:1908@cluster0.f0bostk.mongodb.net/${database}?retryWrites=true&w=majority`;
console.log(database, uriDbConnection);
@Module({
  imports: [
    MongooseModule.forRoot(uriDbConnection),
    MongooseModule.forFeature([
      { name: Proposta.name, schema: PropostaSchema },
      { name: Visualizacao.name, schema: VisualizacaoSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
