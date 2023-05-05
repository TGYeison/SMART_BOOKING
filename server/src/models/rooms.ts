import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";


export const TypeRoom = new GraphQLObjectType({
    name: "Room",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        price: { type: GraphQLInt },
        taxes: { type: GraphQLInt },
        room_type: { type: GraphQLString },
        hotel: { type: GraphQLInt },
    }
})