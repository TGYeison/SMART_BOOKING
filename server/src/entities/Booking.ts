import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';


@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date_admition: string;

    @Column()
    date_departure: string;

    @Column()
    people_number: number;

    @Column()                           //@ManyToOne(()=> User, (user: User) => user.bookings)
    user: number;

    @Column()                           //@ManyToOne(()=> Room, (room: Room) => room.bookings)
    room: number;
}
