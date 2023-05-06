import { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID } from 'graphql';

import { Room } from '../entities/Room';
import { TypeRoom } from '../models/rooms';


export const CREATE_ROOM = {
    type: TypeRoom,
    args: {
        name: { type: GraphQLString},
        price: { type: GraphQLInt },
        taxes: { type: GraphQLInt },
        room_type: { type: GraphQLString },
        hotel: { type: GraphQLInt },
    },
    async resolve(_: any, args: any) {
        const {
            name,
            price,
            taxes,
            room_type,
            hotel
        } = args;

        const res = await Room.insert({
            name,
            price,
            taxes,
            room_type,
            hotel
        });

        const room = await Room.findOneBy({ id: res.identifiers[0].id });

        return { ...room }
    }
}

export const DELETE_ROOM = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await Room.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}