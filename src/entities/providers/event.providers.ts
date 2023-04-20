import { Connection } from 'mongoose';
import EventSchema from '../schemas/Event.schema';

export const eventsProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Event', EventSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
