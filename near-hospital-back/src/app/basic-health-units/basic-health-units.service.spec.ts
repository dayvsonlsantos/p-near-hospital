import { Test, TestingModule } from '@nestjs/testing';
import { BasicHealthUnitsService } from './basic-health-units.service';

describe('BasicHealthUnitsService', () => {
  let service: BasicHealthUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicHealthUnitsService],
    }).compile();

    service = module.get<BasicHealthUnitsService>(BasicHealthUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
