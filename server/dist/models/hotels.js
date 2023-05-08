"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeHotel = void 0;
const graphql_1 = require("graphql");
exports.TypeHotel = new graphql_1.GraphQLObjectType({
    name: "Hotel",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        location: { type: graphql_1.GraphQLString },
        qualify: { type: graphql_1.GraphQLInt },
        state: { type: graphql_1.GraphQLBoolean },
        user: { type: graphql_1.GraphQLInt },
    }
});
