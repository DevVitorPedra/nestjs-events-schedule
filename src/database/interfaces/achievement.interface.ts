/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Achievement extends Document {
   readonly name: string;
   readonly goal_date: Date;
   readonly description: string;
   readonly img_url: string;
}