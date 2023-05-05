import { GraphQLList } from 'graphql';

import { Hotel } from '../entities/Hotel';
import { TypeHotel } from '../models/hotels';

export const GET_ALL_HOTEL = {
    type: GraphQLList(TypeHotel),
    async resolve() {
        return await Hotel.find();
    }
}