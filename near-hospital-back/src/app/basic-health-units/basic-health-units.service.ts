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

    async getBasicHealthUnit(): Promise<BasicHealthUnitsEntity[]> {
        return this.basicHealthUnitsRepository.find();
    }

    async getFavoriteBasicHealthUnit(userId: string): Promise<BasicHealthUnitsEntity | null> {
        return this.basicHealthUnitsRepository
            .createQueryBuilder('basicHealthUnit')
            .where('basicHealthUnit.user_id = :userId', { userId })
            .getOne();
    }

    async deleteBasicHealthUnitForUser(user_id: string, basicHealthUnitId: string): Promise<DeleteResult> {
        return this.basicHealthUnitsRepository.delete({
            user_id: { user_id: user_id },
            id: basicHealthUnitId
        });
    }
}
