import { Module } from '@nestjs/common';

import { UserService } from '../services/users.services';
import { usersProviders } from '../providers/user.providers';
import { DatabaseModule } from '../../database/database.module';
import { UserController } from './users.controller';
import { AchievementServices } from '../services/achievements.services';
import { achievementProviders } from '../providers/achievement.providers';
import { AchievementControler } from './achievements.controller';

@Module({
  imports: [DatabaseModule],
  exports: [AchievementServices],
  controllers: [AchievementControler],
  providers: [AchievementServices, ...achievementProviders],
})
export class AchievementsModule {}
