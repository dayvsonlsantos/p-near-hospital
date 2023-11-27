import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() user: Partial<UsersEntity>): Promise<InsertResult> {
        return this.usersService.createUser(user);
    }

    @Get()
    async findAllUsers(): Promise<UsersEntity[]> {
        return this.usersService.findAllUsers();
    }

    @Get(':userId/basic-health-units')
    async getBasicHealthUnits(@Param('userId') userId: string): Promise<any> {
        return this.usersService.getBasicHealthUnits(userId);
    }

    @Put(':userId')
    async updateUser(
        @Param('userId') userId: string,
        @Body() updateUser: Partial<UsersEntity>,
    ): Promise<UpdateResult> {
        return this.usersService.updateUser(userId, updateUser);
    }

    @Delete(':userId')
    async deleteUser(
        @Param('userId') userId: string,
    ): Promise<DeleteResult> {
        return this.usersService.deleteUser(userId);
    }
}
