"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaUsers = void 0;
const graphql_1 = require("graphql");
//Queries
const users_1 = require("../queries/users");
const hotels_1 = require("../queries/hotels");
const roomType_1 = require("../queries/roomType");
const rooms_1 = require("../queries/rooms");
const bookings_1 = require("../queries/bookings");
const roles_1 = require("../queries/roles");
//Mutations
const users_2 = require("../mutations/users");
const roles_2 = require("../mutations/roles");
const rooms_2 = require("../mutations/rooms");
const hotels_2 = require("../mutations/hotels");
const bookings_2 = require("../mutations/bookings");
const roomType_2 = require("../mutations/roomType");
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        verify: users_2.VERIFY,
        getAllRole: roles_1.GET_ALL_ROLE,
        getAllUsers: users_1.GET_ALL_USER,
        getAllRoom: rooms_1.GET_ALL_ROOM,
        getAllHotel: hotels_1.GET_ALL_HOTEL,
        getAllBooking: bookings_1.GET_ALL_BOOKING,
        getAllRoomType: roomType_1.GET_ALL_ROOM_TYPE
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        logIn: users_2.LOG_IN,
        createRole: roles_2.CREATE_ROLE,
        createUser: users_2.CREATE_USER,
        createRoom: rooms_2.CREATE_ROOM,
        createHotel: hotels_2.CREATE_HOTEL,
        createBooking: bookings_2.CREATE_BOOKING,
        createRoomType: roomType_2.CREATE_ROOM_TYPE,
        deleteRole: roles_2.DELETE_ROLE,
        deleteUser: users_2.DELETE_USER,
        deleteRoom: rooms_2.DELETE_ROOM,
        deleteHotel: hotels_2.DELETE_HOTEL,
        deleteBooking: bookings_2.DELETE_BOOKING,
        deleteRoomType: roomType_2.DELETE_ROOM_TYPE
    }
});
exports.schemaUsers = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation
});
