import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AchievementServices } from '../database/services/achievements.services';
import { achievementProviders } from '../database/providers/achievement.providers';
import { AchievementControler } from '../controllers/achievements.controller';

@Module({
  imports: [DatabaseModule],
  exports: [AchievementServices],
  controllers: [AchievementControler],
  providers: [AchievementServices, ...achievementProviders],
})
export class AchievementsModule {}
