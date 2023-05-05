import { GraphQLString, GraphQLInt, GraphQLID, GraphQLBoolean } from 'graphql';

import { Booking } from '../entities/Booking';
import { TypeBooking } from '../models/bookings';


export const CREATE_BOOKING = {
    type: TypeBooking,
    args: {
        date_admition: { type: GraphQLString },
        date_departure: { type: GraphQLString },
        people_number: { type: GraphQLInt },
        user: { type: GraphQLInt},
        room: { type: GraphQLInt}
    },
    async resolve(_:any, args:any) {
        const { 
            date_admition,
            date_departure,
            people_number,
            user,
            room
        } = args;

        const res = await Booking.insert({
            date_admition,
            date_departure,
            people_number,
            user,
            room
        });

        const booking = await Booking.findOneBy({ id: res.identifiers[0].id});

        return {...booking}
    }
}

export const DELETE_BOOKING = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_:any, args:any) {
        const { id } = args;

        const result = await Booking.delete(id);

        if(result.affected == 1) return true;

        return false;
    }
}