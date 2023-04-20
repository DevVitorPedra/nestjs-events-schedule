import { Module } from '@nestjs/common';

import { UserService } from '../user/services/users.services';
import { usersProviders } from '../user/providers/user.providers';
import { DatabaseModule } from '../database.module';
import { UserController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
