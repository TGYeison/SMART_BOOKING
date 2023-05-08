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
exports.DELETE_HOTEL = exports.CREATE_HOTEL = void 0;
const graphql_1 = require("graphql");
const Hotel_1 = require("../entities/Hotel");
const hotels_1 = require("../models/hotels");
exports.CREATE_HOTEL = {
    type: hotels_1.TypeHotel,
    args: {
        name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        location: { type: graphql_1.GraphQLString },
        qualify: { type: graphql_1.GraphQLInt },
        state: { type: graphql_1.GraphQLBoolean },
        user: { type: graphql_1.GraphQLInt },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, address, location, qualify, state, user, } = args;
            const res = yield Hotel_1.Hotel.insert({
                name,
                address,
                location,
                qualify,
                state,
                user,
            });
            const hotel = yield Hotel_1.Hotel.findOneBy({ id: res.identifiers[0].id });
            return Object.assign({}, hotel);
        });
    }
};
exports.DELETE_HOTEL = {
    type: graphql_1.GraphQLBoolean,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield Hotel_1.Hotel.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
