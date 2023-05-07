import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";


export const TypeUser = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        e_mail: { type: GraphQLString },
        phone: { type: GraphQLString },
        gender: { type: GraphQLInt},
        role: { type: GraphQLInt},
        birth_date: { type: GraphQLString },
        document: { type: GraphQLString },
        //password: { type: GraphQLString },
        type_document: { type: GraphQLInt },
    }
})

export const Auth = new GraphQLObjectType({
    name: "Auth",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        token_access: { type: GraphQLString },
    }
})

