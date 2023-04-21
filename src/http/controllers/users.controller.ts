import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { CreateUserDTO } from '../../entities/dtos/create-user.dto';
import { UserService } from '../services/users.services';
import { User } from '../../entities/interfaces/user.interface';
import { MongoExceptionFilter } from 'src/http/exceptions/mongo.exception';

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
}