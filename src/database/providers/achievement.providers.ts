import { Connection } from 'mongoose';
import AchievementSchema from '../schemas/achievement.schema';

export const achievementProviders = [
  {
    provide: 'ACHIEVEMENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Achievement', AchievementSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
