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
exports.DELETE_ROOM_TYPE = exports.CREATE_ROOM_TYPE = void 0;
const graphql_1 = require("graphql");
const RoomType_1 = require("../entities/RoomType");
const roomType_1 = require("../models/roomType");
exports.CREATE_ROOM_TYPE = {
    type: roomType_1.TypeRoomType,
    args: {
        name: { type: graphql_1.GraphQLString }
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = args;
            const res = yield RoomType_1.RoomType.insert({
                name: name,
            });
            const response = yield RoomType_1.RoomType.findOneBy({ id: res.identifiers[0].id });
            return Object.assign({}, response);
        });
    }
};
exports.DELETE_ROOM_TYPE = {
    type: graphql_1.GraphQLBoolean,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield RoomType_1.RoomType.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
