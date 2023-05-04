import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { Users } from '../queries/users';

const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        users: Users
    }
})

export const schemaUsers = new GraphQLSchema({
    query: rootQuery,
});