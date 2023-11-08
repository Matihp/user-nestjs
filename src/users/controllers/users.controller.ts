import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserToProjectDTO, UserUpdateDTO } from '../dto/user.dto';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RolesAccess } from 'src/auth/decorators/roles.decorator';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';

@Controller('app')
@UseGuards(AuthGuard,RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('register')
  public async RegisterUSer(@Body()body: UserDTO){
    return  await this.userService.createUser(body)
  }

  @RolesAccess('ADMIN')
  @Get('all')
  public async findAllUsers(){
    return await this.userService.findUsers()
  }

  @PublicAccess()
  @Get(':id')
  public async findUserById(@Param('id') id:string){
    return await this.userService.findById(id)
  }
  @Put('edit/:id')
  public async updateUser(@Param('id') id:string,@Body()body:UserUpdateDTO){
    return await this.userService.updateUser(body,id)
  }
  @Delete('delete/:id')
  public async deleteUser(@Param('id') id:string){
    return await this.userService.deleteUser(id)
  }
  @Post('add-project')
  public async addToProject(@Body()body: UserToProjectDTO){
    return await this.userService.relationToProject(body)
  } 
  
}
