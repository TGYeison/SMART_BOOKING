
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

//Entities of references
import { Room } from './Room';

@Entity()
export class RoomType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(()=> Room, (room: Room) => room.room_type)
    rooms: Room[] | null;
}
