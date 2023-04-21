import { Controller, Get, Post, Body, UseFilters, Param } from '@nestjs/common';
import { CreateUserDTO } from '../database/dtos/user.dtos';
import { UserService } from '../database/services/users.services';
import { User } from '../database/interfaces/user.interface';
import { MongoExceptionFilter } from 'src/exceptions/mongo.exception';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usersServices: UserService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() createUserDTO: CreateUserDTO) {
    try {
      console.log(createUserDTO)
      return this.usersServices.create(createUserDTO);
    } catch (error) {
      return error.message
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersServices.findAll();
  }

  @Post("/achievements/:userId")
  @UseFilters(MongoExceptionFilter)
  async addAchievements(@Body() body, @Param('userId') userId: ObjectId) {
    try {
      const {achievementId} = body;
      return this.usersServices.addAchievement(achievementId, userId);
    } catch (error) {
      return error.message
    }
  }
}