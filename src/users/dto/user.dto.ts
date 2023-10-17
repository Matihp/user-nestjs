import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { ACCESS_LEVEL, ROLES } from "src/constants/roles";
import { UsersEntity } from "../entities/user.entity";
import { ProjectsEntity } from "src/projects/entities/projects.entity";

export class UserDTO{
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsEnum(ROLES)
    role: ROLES;
}

export class UserUpdateDTO{
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsNumber()
    age: number;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsEnum(ROLES)
    role: ROLES;
}
export class UserToProjectDTO{
    @IsNotEmpty()
    @IsUUID()
    user:UsersEntity

    @IsNotEmpty()
    @IsUUID()
    project:ProjectsEntity

    @IsNotEmpty()
    @IsEnum(ACCESS_LEVEL)
    accessLevel:ACCESS_LEVEL
}