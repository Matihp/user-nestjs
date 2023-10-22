import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthBody } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('login')
    async login(@Body(){username,password}:AuthDto){
        const userValidate=await this.authService.validateUser(username,password)
        if(!userValidate){
        throw new UnauthorizedException('El nombre de usuario o contraseña esta mal')
    }
    const jwt= await this.authService.generateJwt(userValidate)
    return jwt
    }
    
}
