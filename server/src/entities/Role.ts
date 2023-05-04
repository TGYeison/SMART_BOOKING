import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

//Entities of references
import { User } from './User';

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user: User) => user.role)
    users: User[] | null;
}
