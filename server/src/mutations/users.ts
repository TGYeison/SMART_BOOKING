import { GraphQLString, GraphQLInt, GraphQLID, GraphQLBoolean } from 'graphql';
import bcryptJS from 'bcryptjs';

import { User } from '../entities/User';
import { TypeUser, Auth } from '../models/users';
import { tokenVerify, genToken, comparePass } from '../Auth/auth';


export const VERIFY = {
    type: GraphQLBoolean,
    async resolve(_:any, args:any, context:any){       
        const token = context.headers.authorization;
        const state = await tokenVerify(token);

        return state;
    }
}


export const CREATE_USER = {
    type: Auth,
    args: {
        name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        e_mail: { type: GraphQLString },
        phone: { type: GraphQLString },
        gender: { type: GraphQLString},
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

        try {
            const res = await User.insert({
                name,
                last_name, 
                e_mail, 
                phone, 
                gender: parseInt(gender), 
                role: parseInt(role), 
                birth_date,
                document, 
                password: cryptoPass,
                type_document : parseInt(type_document)
            });
    
            const token = genToken(res.identifiers[0].id);
    
            return {
                id: res.identifiers[0].id,
                name: name,
                token_access: token
            }
        } catch (error) {
            console.log(error);
            throw new Error('error creating user');
        }
        
    }
}

export const LOG_IN = {
    type: Auth,
    args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_:any, args:any) {
        const { name, password } = args;

        try {
            const user = await User.findOneBy({name: name});

            if(!user?.password) {
                throw new Error('user not found');
            }

            const valid = await comparePass(password, user.password);

            if(!valid) {
                throw new Error('password incorrect');
            }

            const token = genToken(user.id)

            return {
                id: user.id,
                name: name,
                token_access: token
            }
        } catch (error) {
            console.log(error);
            throw new Error('Denied access password');
        }
        
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

