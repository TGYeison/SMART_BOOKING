"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeRoom = void 0;
const graphql_1 = require("graphql");
exports.TypeRoom = new graphql_1.GraphQLObjectType({
    name: "Room",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLInt },
        taxes: { type: graphql_1.GraphQLInt },
        room_type: { type: graphql_1.GraphQLString },
        hotel: { type: graphql_1.GraphQLInt },
    }
});
