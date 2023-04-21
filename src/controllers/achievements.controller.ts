import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { CreateAchievementDTO } from '../database/dtos/achievement.dtos';
import { MongoExceptionFilter } from 'src/exceptions/mongo.exception';
import { AchievementServices } from '../database/services/achievements.services';
import { Achievement } from '../database/schemas/achievement.schema';

@Controller('achievements')
export class AchievementControler {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly achivementServices: AchievementServices) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() createAchievementDTO: CreateAchievementDTO) {
    try {
      console.log(createAchievementDTO)
      return this.achivementServices.create(createAchievementDTO);
    } catch (error) {
      return error.message
    }
  }

  @Get()
  async findAll(): Promise<Achievement[]> {
    return this.achivementServices.findAll();
  }
}