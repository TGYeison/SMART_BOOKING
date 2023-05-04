import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

//Entities of references
import { User } from './User';
import { Room } from './Room';

@Entity()
export class Hotel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hotel_name: string;

    @Column()
    address: string;

    @Column()
    location: string;

    @Column()
    qualify: number;

    @Column()
    state: boolean;

    @ManyToOne(() => User, (user: User) => user.hotels)
    user: User;

    @OneToMany(() => Room, (room: Room) => room.hotel)
    rooms: Room[] | null;
}
