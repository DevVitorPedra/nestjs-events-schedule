/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../entities/interfaces/user.interface';
import { CreateUserDTO } from '../../entities/dtos/create-user.dto';

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
}