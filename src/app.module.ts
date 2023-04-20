import { Module } from '@nestjs/common';
import { UsersModule } from './database/user/user.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
