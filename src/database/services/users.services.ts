/* eslint-disable prettier/prettier */
import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import {  CreateUserDTO } from '../dtos/user.dtos';
import { Achievement } from '../schemas/achievement.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const createdCat = new this.userModel(createUserDTO);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(email: string): Promise<User>{
    return this.userModel.findOne({email: email}).exec()
  }
  async addAchievement(achievementId:ObjectId, userId:ObjectId): Promise<User>{
    return this.userModel.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { achievements: achievementId } },{returnOriginal: false}
    );
  }
}