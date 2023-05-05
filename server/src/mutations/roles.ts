import { GraphQLString, GraphQLID, GraphQLBoolean } from 'graphql';

import { Role } from '../entities/Role';
import { TypeRole } from '../models/roles';

export const CREATE_ROLE = {
    type: TypeRole,
    args: {
        name: {type: GraphQLString}
    },
    async resolve(_:any, args:any) {
        const { name } = args;

        const res = await Role.insert({
            name: name,
        });

        const response = await Role.findOneBy({ id: res.identifiers[0].id});

        return {...response}
    }
}


export const DELETE_ROLE = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await Role.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}