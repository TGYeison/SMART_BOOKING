import { GraphQLSchema, GraphQLObjectType } from 'graphql';

//Queries
import { GET_ALL_USER } from '../queries/users';
import { GET_ALL_HOTEL } from '../queries/hotels';
import { GET_ALL_ROOM_TYPE } from '../queries/roomType';
import { GET_ALL_ROOM } from '../queries/rooms';
import { GET_ALL_BOOKING } from '../queries/bookings';
import { GET_ALL_ROLE } from '../queries/roles';

//Mutations
import { CREATE_USER, DELETE_USER } from '../mutations/users';
import { CREATE_ROLE, DELETE_ROLE } from '../mutations/roles';
import { CREATE_ROOM, DELETE_ROOM } from '../mutations/rooms';
import { CREATE_HOTEL, DELETE_HOTEL } from '../mutations/hotels';
import { CREATE_BOOKING, DELETE_BOOKING } from '../mutations/bookings';
import { CREATE_ROOM_TYPE, DELETE_ROOM_TYPE } from '../mutations/roomType';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllRole: GET_ALL_ROLE,
        getAllUsers: GET_ALL_USER,
        getAllRoom: GET_ALL_ROOM,
        getAllHotel: GET_ALL_HOTEL,
        getAllBooking: GET_ALL_BOOKING,
        getAllRoomType: GET_ALL_ROOM_TYPE
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createRole: CREATE_ROLE,
        createUser: CREATE_USER,
        createRoom: CREATE_ROOM,
        createHotel: CREATE_HOTEL,
        createBooking: CREATE_BOOKING,
        createRoomType: CREATE_ROOM_TYPE,
        deleteRole: DELETE_ROLE,
        deleteUser: DELETE_USER,
        deleteRoom: DELETE_ROOM,
        deleteHotel: DELETE_HOTEL,
        deleteBooking: DELETE_BOOKING,
        deleteRoomType: DELETE_ROOM_TYPE
    }
});

export const schemaUsers = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});