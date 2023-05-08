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
exports.DELETE_ROOM = exports.CREATE_ROOM = void 0;
const graphql_1 = require("graphql");
const Room_1 = require("../entities/Room");
const rooms_1 = require("../models/rooms");
exports.CREATE_ROOM = {
    type: rooms_1.TypeRoom,
    args: {
        name: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLInt },
        taxes: { type: graphql_1.GraphQLInt },
        room_type: { type: graphql_1.GraphQLString },
        hotel: { type: graphql_1.GraphQLInt },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, taxes, room_type, hotel } = args;
            const res = yield Room_1.Room.insert({
                name,
                price,
                taxes,
                room_type,
                hotel
            });
            const room = yield Room_1.Room.findOneBy({ id: res.identifiers[0].id });
            return Object.assign({}, room);
        });
    }
};
exports.DELETE_ROOM = {
    type: graphql_1.GraphQLBoolean,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield Room_1.Room.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
