import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const TypeRole = new GraphQLObjectType({
    name: "TypeRole",
    fields: {
        id: { type: GraphQLID},
        name: { type: GraphQLString}
    }
});
