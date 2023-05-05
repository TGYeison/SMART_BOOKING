import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";


export const TypeBooking:any = new GraphQLObjectType({
    name: "Booking",
    fields: {
        id: { type: GraphQLID },
        date_admition: { type: GraphQLString },
        date_departure: { type: GraphQLString },
        people_number: { type: GraphQLInt },
        user: { type: GraphQLInt},
        room: { type: GraphQLInt}
    }
})


