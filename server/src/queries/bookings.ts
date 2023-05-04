import { GraphQLString } from 'graphql';

export const Users = {
    type: GraphQLString,
    resolve: () => 'Hello, world',
}