import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { PUBLIC_KEY } from 'src/constants/key.decorator';
import { UsersService } from 'src/users/services/users.service';
import { useToken } from 'src/utils/use.token';
import { UseToken } from '../interfaces/auth.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService:UsersService,private readonly reflector:Reflector){

  }
  async canActivate(
    context: ExecutionContext,
  ) {
    const isPublic=this.reflector.get<boolean>(PUBLIC_KEY,context.getHandler)
    if(isPublic){
      return true
    }
    const req= context.switchToHttp().getRequest<Request>()

    const token =req.headers['mc_token']
    if(!token || Array.isArray(token)){
      throw new UnauthorizedException('Token is Invalid')
    }
    const manageToken:UseToken | string = useToken(token)
    if(typeof manageToken==='string'){
      throw new UnauthorizedException(manageToken)
    }
    if(manageToken.isExpired){
      throw new UnauthorizedException('Token is expired')
    }
    const{sub}=manageToken
    const user=await this.userService.findById(sub)
    if(!user){
      throw new UnauthorizedException('Invalid user')
    }
    req.idUser = user.id
    req.roleUser = user.role
    
    return true;
  }
}
