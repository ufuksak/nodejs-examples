import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {DatabaseModule} from "./database.module";
import {CatsService} from "./service/cats.service";
import { catsProviders } from './providers/cats.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [CatsService, ...catsProviders],
})
export class AppModule {}
