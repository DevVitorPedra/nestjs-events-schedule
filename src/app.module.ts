import { Module } from '@nestjs/common';
import { UsersModule } from './database/user/users.module';
import { AuthModule } from './auth/authentication/auth.module';

@Module({
  imports: [UsersModule,AuthModule],
})
export class AppModule {}
