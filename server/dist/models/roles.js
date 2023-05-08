"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeRole = void 0;
const graphql_1 = require("graphql");
exports.TypeRole = new graphql_1.GraphQLObjectType({
    name: "TypeRole",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString }
    }
});
