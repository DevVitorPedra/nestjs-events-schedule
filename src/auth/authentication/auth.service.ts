/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../database/user/services/users.services';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const hashedPass =  bcrypt.compareSync(pass, user?.password);
    
    console.log(hashedPass)
    if (hashedPass) {
      throw new UnauthorizedException(); 
    }
    const {_id, nickname } = user;
    const JWT = sign({userID:_id,nickname:nickname,},process.env.SECRET,{expiresIn:'15m'})
    return JWT;
  }
}