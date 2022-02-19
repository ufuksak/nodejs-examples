import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import {CatsService} from "./service/cats.service";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CatsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getCats()).toBe('Hello World!');
    });
  });
});
