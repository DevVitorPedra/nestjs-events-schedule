/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Achievement } from './achievement.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;
  
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievements' }] })
  achievements: Achievement[];
  
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});
export default UserSchema;