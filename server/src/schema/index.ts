import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { Users } from '../queries/users';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: Users,
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        
    }
});

export const schemaUsers = new GraphQLSchema({
    query: Query,
});