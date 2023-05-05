import { GraphQLString, GraphQLInt, GraphQLID, GraphQLBoolean } from 'graphql';
import bcryptJS from 'bcryptjs';

import { User } from '../entities/User';
import { TypeUser } from '../models/users';


export const CREATE_USER = {
    type: TypeUser,
    args: {
        name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        e_mail: { type: GraphQLString },
        phone: { type: GraphQLInt },
        gender: { type: GraphQLInt},
        role: { type: GraphQLString},
        birth_date: { type: GraphQLString },
        document: { type: GraphQLString },
        password: { type: GraphQLString },
        type_document: { type: GraphQLString },
    },
    async resolve(_:any, args:any) {
        const { 
            name, 
            last_name, 
            e_mail, 
            phone, 
            gender, 
            role, 
            birth_date,
            document, 
            password,
            type_document 
        } = args;

        const cryptoPass = await bcryptJS.hash(password, 10);

        const res = await User.insert({
            name,
            last_name, 
            e_mail, 
            phone, 
            gender, 
            role, 
            birth_date,
            document, 
            password: cryptoPass,
            type_document 
        });

        const user = await User.findOneBy({ id: res.identifiers[0].id});

        return {...user}
    }
}


export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await User.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}

export const UPDATE_USER = {
    type: TypeUser,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await User.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}

