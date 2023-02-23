import { Test, TestingModule } from '@nestjs/testing';
import { FaculteController } from './faculte.controller';
import { FaculteService } from './faculte.service';

describe('FaculteController', () => {
  let controller: FaculteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaculteController],
      providers: [FaculteService],
    }).compile();

    controller = module.get<FaculteController>(FaculteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
