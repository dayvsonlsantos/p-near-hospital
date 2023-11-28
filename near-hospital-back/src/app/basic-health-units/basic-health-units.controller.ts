import { DeleteResult, InsertResult } from 'typeorm';
import { BasicHealthUnitsEntity } from './basic-health-units.entity';
import { BasicHealthUnitsService } from './basic-health-units.service';
import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';

@Controller('basic-health-units')
export class BasicHealthUnitsController {
    constructor(private readonly basicHealthUnitsService: BasicHealthUnitsService) { }

    // @UseGuards(AuthGuard())  // Use este decorator se você estiver usando autenticação
    // npm install --save @nestjs/passport

    // Erro no post, pois o user_id como null
    @Post()
    async AddFavoriteBasicHealthUnit(@Body() basicHealthUnit: Partial<BasicHealthUnitsEntity>): Promise<InsertResult> {
        return this.basicHealthUnitsService.AddFavoriteBasicHealthUnit(basicHealthUnit);
    }

    // @UseGuards(AuthGuard())  // Use este decorator se você estiver usando autenticação
    @Get(':userId')
    async getFavoriteBasicHealthUnit(@Param('userId') userId: string): Promise<any> {
        return this.basicHealthUnitsService.getFavoriteBasicHealthUnit(userId);
    }

    @Get()
    async getBasicHealthUnit(): Promise<BasicHealthUnitsEntity[]> {
        return this.basicHealthUnitsService.getBasicHealthUnit();
    }

    @Delete(':userId/:basicHealthUnitId')
    async deleteBasicHealthUnitForUser(
        @Param('userId') userId: string,
        @Param('basicHealthUnitId') basicHealthUnitId: string,
    ): Promise<DeleteResult> {
        return this.basicHealthUnitsService.deleteBasicHealthUnitForUser(userId, basicHealthUnitId);
    }
    
}
