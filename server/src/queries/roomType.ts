import { GraphQLList } from 'graphql';

import { RoomType } from '../entities/RoomType';
import { TypeRoomType } from '../models/roomType';

export const GET_ALL_ROOM_TYPE = {
    type: GraphQLList(TypeRoomType),
    async resolve() {
        return await RoomType.find();
    }
}