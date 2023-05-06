import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from "graphql";

import { TypeUser } from "./users";
import { TypeRoom } from "./rooms";

export const TypeHotel:any = new GraphQLObjectType({
    name: "Hotel",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        location: { type: GraphQLString },
        qualify: { type: GraphQLInt },
        state: { type: GraphQLBoolean },
        user: { type: GraphQLInt },
    }
})


