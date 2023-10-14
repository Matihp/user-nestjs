import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';

@Controller('app')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('register')
  public async RegisterUSer(@Body()body: UserDTO){
    return  await this.userService.createUser(body)
  }
  @Get('all')
  public async findAllUsers(){
    return await this.userService.findUsers()
  }
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
  
}
