import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BasicHealthUnitsEntity } from './basic-health-units.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class BasicHealthUnitsService {
    constructor(
        @InjectRepository(BasicHealthUnitsEntity)
        private readonly basicHealthUnitsRepository: Repository<BasicHealthUnitsEntity>
    ) { }

    async AddFavoriteBasicHealthUnit(basicHealthUnit: Partial<BasicHealthUnitsEntity>): Promise<InsertResult> {
        return await this.basicHealthUnitsRepository
            .createQueryBuilder()
            .insert()
            .into(BasicHealthUnitsEntity)
            .values(basicHealthUnit)
            .execute();
    }

    async GetFavoriteBasicHealthUnit(): Promise<BasicHealthUnitsEntity[]> {
        return this.basicHealthUnitsRepository.createQueryBuilder('basicHealthUnit').getMany();
    }

    async deleteBasicHealthUnitForUser(userId: string, basicHealthUnitId: string): Promise<DeleteResult> {
        return this.basicHealthUnitsRepository.delete({
            user: { user_id: userId },
            id: basicHealthUnitId
        });
    }
}
