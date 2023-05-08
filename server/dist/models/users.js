"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.TypeUser = void 0;
const graphql_1 = require("graphql");
exports.TypeUser = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        e_mail: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLInt },
        role: { type: graphql_1.GraphQLInt },
        birth_date: { type: graphql_1.GraphQLString },
        document: { type: graphql_1.GraphQLString },
        //password: { type: GraphQLString },
        type_document: { type: graphql_1.GraphQLInt },
    }
});
exports.Auth = new graphql_1.GraphQLObjectType({
    name: "Auth",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        token_access: { type: graphql_1.GraphQLString },
    }
});
