"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_BOOKING = exports.CREATE_BOOKING = void 0;
const graphql_1 = require("graphql");
const Booking_1 = require("../entities/Booking");
const bookings_1 = require("../models/bookings");
exports.CREATE_BOOKING = {
    type: bookings_1.TypeBooking,
    args: {
        date_admition: { type: graphql_1.GraphQLString },
        date_departure: { type: graphql_1.GraphQLString },
        people_number: { type: graphql_1.GraphQLInt },
        user: { type: graphql_1.GraphQLInt },
        room: { type: graphql_1.GraphQLInt }
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { date_admition, date_departure, people_number, user, room } = args;
            const res = yield Booking_1.Booking.insert({
                date_admition,
                date_departure,
                people_number,
                user,
                room
            });
            const booking = yield Booking_1.Booking.findOneBy({ id: res.identifiers[0].id });
            return Object.assign({}, booking);
        });
    }
};
exports.DELETE_BOOKING = {
    type: graphql_1.GraphQLBoolean,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield Booking_1.Booking.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
