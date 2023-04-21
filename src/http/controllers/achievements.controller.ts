import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { CreateAchievementDTO } from '../../entities/dtos/create-achievement.dto';
import { MongoExceptionFilter } from 'src/http/exceptions/mongo.exception';
import { AchievementServices } from '../services/achievements.services';
import { Achievement } from '../../database/schemas/achievement.schema';

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