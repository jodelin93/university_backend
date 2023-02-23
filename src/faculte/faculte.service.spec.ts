import { Test, TestingModule } from '@nestjs/testing';
import { FaculteService } from './faculte.service';

describe('FaculteService', () => {
  let service: FaculteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaculteService],
    }).compile();

    service = module.get<FaculteService>(FaculteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
