import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './http/controllers/users.module';
import { AuthModule } from './auth/authentication/auth.module';
import { LoggerMiddleware } from './middlewares/authorization';
import { AchievementsModule } from './http/controllers/achievements.module';
@Module({
  imports: [UsersModule, AuthModule, AchievementsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
