import { User } from "../../database/schemas/user.schema";
/* eslint-disable prettier/prettier */
export class CreateAchievementDTO {
  readonly participants: User[];
  readonly name: string;
  readonly goal_date: Date;
  readonly description: string;
  readonly img_url: string;
  }