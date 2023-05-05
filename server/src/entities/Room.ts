import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Room extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    taxes: number;

    @Column()                           //@ManyToOne(() => RoomType, (room_type: RoomType) => room_type.rooms)
    room_type: string;

    @Column()                           //@ManyToOne(() => Hotel, (hotel: Hotel) => hotel.rooms)
    hotel: number;
}
