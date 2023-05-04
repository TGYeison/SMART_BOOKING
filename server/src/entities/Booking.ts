import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm';

//Entities of references
import { User } from './User';
import { Room } from './Room';


@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date_admition: Date;

    @Column()
    date_departure: Date;

    @Column()
    people_number: number;

    @ManyToOne(() => User, (user: User) => user.bookings)
    user: User;

    @ManyToOne(() => Room, (room: Room) => room.bookings)
    room: Room;
}
