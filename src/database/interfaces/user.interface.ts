/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Achievement } from '../schemas/achievement.schema';

export interface User extends Document {
   readonly first_name: string;
   readonly last_name: string;
   readonly email: string; 
   readonly nickname: string;
   readonly password: string;
   readonly achievements: Achievement[];
}