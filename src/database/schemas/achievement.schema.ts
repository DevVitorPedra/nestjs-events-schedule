/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type AchievementDocument = HydratedDocument<Achievement>;

@Schema()
export class Achievement {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  goal_date: Date;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  img_url: string;
}
 
const AchievementSchema = SchemaFactory.createForClass(Achievement);

export default AchievementSchema;