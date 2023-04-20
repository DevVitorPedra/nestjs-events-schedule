/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ required: true })
  event_name: string;

  @Prop({ required: true })
  event_location: string;

  @Prop({ required: true })
  invite_required: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  owner: User[];

  @Prop({required: true})
  email: string;

}
 
const EventSchema = SchemaFactory.createForClass(Event);

export default EventSchema;