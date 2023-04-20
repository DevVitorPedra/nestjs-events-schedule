/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../entities/services/users.services';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(email: string, password: string): Promise<any> {
    try {
      console.log(password)
      const user = await this.usersService.findOne(email);
      const match = bcrypt.compare(password, user?.password)
      if (!match) {
        throw new UnauthorizedException(); 
      }
      const {_id, nickname } = user;
      const JWT = sign({userID:_id,nickname:nickname,},process.env.SECRET,{expiresIn:'15m'})
      return JWT;
    } catch (error) {
      throw new UnauthorizedException({message:error.message})
    }
  }
  async accessControl(jwtoken: string){

  }
}