"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeBooking = void 0;
const graphql_1 = require("graphql");
exports.TypeBooking = new graphql_1.GraphQLObjectType({
    name: "Booking",
    fields: {
        id: { type: graphql_1.GraphQLID },
        date_admition: { type: graphql_1.GraphQLString },
        date_departure: { type: graphql_1.GraphQLString },
        people_number: { type: graphql_1.GraphQLInt },
        user: { type: graphql_1.GraphQLInt },
        room: { type: graphql_1.GraphQLInt }
    }
});
