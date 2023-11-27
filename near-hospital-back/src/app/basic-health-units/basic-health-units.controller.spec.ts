import { Test, TestingModule } from '@nestjs/testing';
import { BasicHealthUnitsController } from './basic-health-units.controller';

describe('BasicHealthUnitsController', () => {
  let controller: BasicHealthUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicHealthUnitsController],
    }).compile();

    controller = module.get<BasicHealthUnitsController>(BasicHealthUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
