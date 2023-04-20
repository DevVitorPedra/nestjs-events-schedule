import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        try {
            const authorization = req.headers['authorization']
            if (!authorization) throw new UnauthorizedException("No token provided")
            const [authenticationType, token] = authorization.split(' ')
            if (!authenticationType || !token) throw new UnauthorizedException("Invalid token")
            if (authenticationType !== 'Bearer' || !token) {
                throw new UnauthorizedException('Invalid token')
            }
            verify(token, process.env.SECRET)
            next()
        } catch(error) {
            throw new UnauthorizedException(error.message)
        }
    }
}
