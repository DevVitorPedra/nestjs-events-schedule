/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { User } from '../schemas/user.schema';

export interface Achievement extends Document {
   readonly participants: User[];
   readonly name: string;
   readonly goal_date: Date;
   readonly description: string;
   readonly img_url: string;
}