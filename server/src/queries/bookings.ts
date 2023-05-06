import { GraphQLList } from 'graphql';

import { Booking } from '../entities/Booking';
import { TypeBooking } from '../models/bookings';

export const GET_ALL_BOOKING = {
    type: GraphQLList(TypeBooking),
    async resolve() {
        return await Booking.find();
    }
}