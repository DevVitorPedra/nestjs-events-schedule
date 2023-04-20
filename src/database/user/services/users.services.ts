/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { CreateUserDTO } from '../dto/create-user.dto';

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
  async findOne(username: string): Promise<User>{
    return this.userModel.findOne({name: username}).exec()
  }
}