"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const User_1 = require("./entities/User");
const Hotel_1 = require("./entities/Hotel");
const Room_1 = require("./entities/Room");
const Role_1 = require("./entities/Role");
const Booking_1 = require("./entities/Booking");
const RoomType_1 = require("./entities/RoomType");
exports.ConnectDB = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.DB_HOST,
    username: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    port: config_1.DB_PORT,
    database: config_1.DB_NAME,
    entities: [User_1.User, Role_1.Role, Booking_1.Booking, Room_1.Room, Hotel_1.Hotel, RoomType_1.RoomType],
    synchronize: true,
    ssl: false
});
