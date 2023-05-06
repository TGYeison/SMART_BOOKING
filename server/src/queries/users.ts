import { GraphQLList } from 'graphql';

import { User } from '../entities/User';
import { TypeUser } from '../models/users';

export const GET_ALL_USER = {
    type: GraphQLList(TypeUser),
    async resolve() {
        return await User.find();
    }
}