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
    @Column({unique:true})
    username: string;
    @Column()
    password: string;
    @Column({unique:true})
    email: string;
    @Column()
    role: string;
}
