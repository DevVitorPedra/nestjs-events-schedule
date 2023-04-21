/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Achievement } from '../interfaces/achievement.interface';
import { CreateAchievementDTO } from '../dtos/achievement.dtos';

@Injectable()
export class AchievementServices {
  constructor(
    @Inject('ACHIEVEMENT_MODEL')
    private achievementModel: Model<Achievement>,
  ) {}

  async create(createAchievementDTO: CreateAchievementDTO): Promise<Achievement> {
    const newAchievement = new this.achievementModel(createAchievementDTO);
    return newAchievement.save();
  }

  async findAll(): Promise<Achievement[]> {
    return this.achievementModel.find().exec();
  }
  async findOne(event_name: string): Promise<Achievement>{
    return this.achievementModel.findOne({event_name: event_name}).exec()
  }
}