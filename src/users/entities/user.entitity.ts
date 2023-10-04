import { IUser } from "interfaces/user.interfaces";
import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'users'})
export class UsersEntity extends BaseEntity implements IUser{
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    age: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @Column()
    role: string;
}
