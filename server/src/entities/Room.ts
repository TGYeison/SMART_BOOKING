import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

//Entities of references
import { Hotel } from './Hotel';
import { RoomType } from './RoomType';
import { Booking } from './Booking';

@Entity()
export class Room extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    taxes: number;

    @ManyToOne(() => RoomType, (room_type: RoomType) => room_type.rooms)
    room_type: string;

    @ManyToOne(() => Hotel, (hotel: Hotel) => hotel.rooms)
    hotel: Hotel;

    @OneToMany(() => Booking, (booking: Booking) => booking.room)
    bookings: Booking[] | null;
}
