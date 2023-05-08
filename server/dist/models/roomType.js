"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeRoomType = void 0;
const graphql_1 = require("graphql");
exports.TypeRoomType = new graphql_1.GraphQLObjectType({
    name: "TypeRoom",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString }
    }
});
