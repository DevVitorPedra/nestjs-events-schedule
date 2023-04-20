/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'crypto';


@Controller()
export class AppController {
  constructor(private readonly String) { }
  @Get()
  async getHello() {
 
    return "Mongolo"
  }
}
