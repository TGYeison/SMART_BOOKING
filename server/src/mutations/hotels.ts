import { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID } from 'graphql';

import { Hotel } from '../entities/Hotel';
import { TypeHotel } from '../models/hotels';


export const CREATE_HOTEL = {
    type: TypeHotel,
    args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        location: { type: GraphQLString },
        qualify: { type: GraphQLInt },
        state: { type: GraphQLBoolean },
        user: { type: GraphQLInt },
    },
    async resolve(_:any, args:any) {
        const { 
            name,
            address,
            location,
            qualify,
            state,
            user,
        } = args;

        const res = await Hotel.insert({
            name,
            address,
            location,
            qualify,
            state,
            user,
        });

        const hotel = await Hotel.findOneBy({ id: res.identifiers[0].id});

        return {...hotel}
    }
}


export const DELETE_HOTEL = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await Hotel.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}