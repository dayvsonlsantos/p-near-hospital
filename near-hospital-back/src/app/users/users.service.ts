import { Injectable } from '@nestjs/common';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }

    async createUser(user: Partial<UsersEntity>): Promise<InsertResult> {
        return await this.userRepository
            .createQueryBuilder()
            .insert()
            .into(UsersEntity)
            .values(user)
            .execute();
    }

    // async findAllUsers(): Promise<UsersEntity[]> {
    //     return this.userRepository.createQueryBuilder('user').getMany();
    // }
    
    async findAllUsers(): Promise<UsersEntity[]> {
        return this.userRepository.find();
    }

    // Outra forma:
    // async findAllUsers(): Promise<UsersEntity[]> {
    //     return this.userRepository.find();
    // }

    async getBasicHealthUnits(userId: string): Promise<any> {
        return this.userRepository.findOne({
            where: { user_id: userId }
        });
    }

    async updateUser(userId: string, updateUser: Partial<UsersEntity>): Promise<UpdateResult> {
        return this.userRepository.update(userId, updateUser);
    }

    async deleteUser(userId: string): Promise<DeleteResult> {
        return this.userRepository.delete(userId);
    }
}
