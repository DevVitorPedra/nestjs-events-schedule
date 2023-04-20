import { Module } from '@nestjs/common';

import { UserService } from './services/users.services';
import { usersProviders } from './providers/user.providers';
import { DatabaseModule } from '../database.module';
import { UserController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  exports:[UserService],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
