import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposta, PropostaSchema } from './schema/proposta.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mateus:1908@cluster0.f0bostk.mongodb.net/freelas?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Proposta.name, schema: PropostaSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
