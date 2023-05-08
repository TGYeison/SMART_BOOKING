import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class User extends BaseEntity {   
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    last_name: string;
    
    @Column()
    e_mail: string;

    @Column()
    phone: string;
  
    @Column()
    gender: number;

    @Column()                           //@ManyToOne(()=> Role, (role: Role) => role.users)
    role: number;
 
    @Column()
    birth_date: string;
 
    @Column()
    document: string;

    @Column()
    password: string;

    @Column()
    type_document: number;
}
