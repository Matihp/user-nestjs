import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('app')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

}
