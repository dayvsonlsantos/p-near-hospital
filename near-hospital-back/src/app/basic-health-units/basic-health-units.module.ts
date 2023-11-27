import { Module } from '@nestjs/common';
import { BasicHealthUnitsController } from './basic-health-units.controller';
import { BasicHealthUnitsService } from './basic-health-units.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicHealthUnitsEntity } from './basic-health-units.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BasicHealthUnitsEntity])],
  controllers: [BasicHealthUnitsController],
  providers: [BasicHealthUnitsService]
})
export class BasicHealthUnitsModule {}
