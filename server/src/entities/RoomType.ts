
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class RoomType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
