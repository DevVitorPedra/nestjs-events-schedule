import { Module } from '@nestjs/common';

import { UserService } from '../database/services/users.services';
import { usersProviders } from '../database/providers/user.providers';
import { DatabaseModule } from '../database/database.module';
import { UserController } from '../controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
