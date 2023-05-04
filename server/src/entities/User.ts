import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';

//Entities of references
import { Booking } from './Booking';
import { Hotel } from './Hotel';
import { Role } from './Role';

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
    phone: number;

    @Column()
    gender: number;

    @ManyToOne(()=> Role, (role: Role) => role.users)
    role: string;

    @Column()
    birth_date: Date;

    @Column()
    document: string;

    @Column()
    password: string;

    @Column()
    type_document: string;

    @OneToMany(()=> Booking, (booking: Booking) => booking.user)
    bookings: Booking[] | null; 

    @OneToMany(()=> Hotel, (hotel: Hotel) => hotel.user)
    hotels: Hotel[] | null;
}
