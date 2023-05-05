import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Hotel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    location: string;

    @Column()
    qualify: number;

    @Column()
    state: boolean;

    @Column()                       //@ManyToOne(() => User, (user: User) => user.hotels)
    user: number;

}
