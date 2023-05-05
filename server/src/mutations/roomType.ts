import { GraphQLString, GraphQLBoolean, GraphQLID } from 'graphql';

import { RoomType } from '../entities/RoomType';
import { TypeRoomType } from '../models/roomType';

export const CREATE_ROOM_TYPE = {
    type: TypeRoomType,
    args: {
        name: {type: GraphQLString}
    },
    async resolve(_:any, args:any) {
        const { name } = args;

        const res = await RoomType.insert({
            name: name,
        });

        const response = await RoomType.findOneBy({ id: res.identifiers[0].id});

        return {...response}
    }
}

export const DELETE_ROOM_TYPE = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await RoomType.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}