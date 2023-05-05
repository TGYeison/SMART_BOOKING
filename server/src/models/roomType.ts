import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const TypeRoomType = new GraphQLObjectType({
    name: "TypeRoom",
    fields: {
        id: { type: GraphQLID},
        name: { type: GraphQLString}
    }
});
