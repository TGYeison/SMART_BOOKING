import { DataSource } from "typeorm";

import { User } from "./entities/User";
import { Hotel } from "./entities/Hotel";
import { Room } from "./entities/Room";
import { Role } from "./entities/Role";
import { Booking } from "./entities/Booking";
import { RoomType } from "./entities/RoomType";

export const ConnectDB = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1q2w3e$R',
    port: 5432,
    database: 'bookings',
    entities: [User, Role, Booking, Room, Hotel, RoomType],
    synchronize: true,
    ssl: false
});
