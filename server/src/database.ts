import { DataSource } from "typeorm";

import {  
    DB_PORT, 
    DB_HOST, 
    DB_NAME, 
    DB_USER, 
    DB_PASSWORD, 
} from "./config";

import { User } from "./entities/User";
import { Hotel } from "./entities/Hotel";
import { Room } from "./entities/Room";
import { Role } from "./entities/Role";
import { Booking } from "./entities/Booking";
import { RoomType } from "./entities/RoomType";



export const ConnectDB = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
    entities: [User, Role, Booking, Room, Hotel, RoomType],
    synchronize: true,
    ssl: false
});
