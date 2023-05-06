import { GraphQLList } from 'graphql';

import { Role } from '../entities/Role';
import { TypeRole } from '../models/roles';

export const GET_ALL_ROLE = {
    type: GraphQLList(TypeRole),
    async resolve() {
        return await Role.find();
    }
}