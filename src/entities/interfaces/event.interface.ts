/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface Event extends Document {
   readonly participants: string[];
   readonly event_name: string;
   readonly event_date: Date;
   readonly event_description: string;
   readonly event_img_url: string;
}