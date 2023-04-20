import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './entities/controllers/users.module';
import { AuthModule } from './auth/authentication/auth.module';
import { LoggerMiddleware } from './middlewares/authorization';
@Module({
  imports: [UsersModule,AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
