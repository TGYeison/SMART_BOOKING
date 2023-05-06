import { GraphQLList } from 'graphql';

import { Room } from '../entities/Room';
import { TypeRoom } from '../models/rooms';

export const GET_ALL_ROOM = {
    type: GraphQLList(TypeRoom),
    async resolve() {
        return await Room.find();
    }
}