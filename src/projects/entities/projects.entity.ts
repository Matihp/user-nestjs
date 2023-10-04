import { IProject } from "interfaces/projects.interface";
import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'projects'})
export class ProjectsEntity extends BaseEntity implements IProject{
    @Column()
    name: string;
    @Column()
    description: string;
}