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
exports.GET_ALL_ROOM = void 0;
const graphql_1 = require("graphql");
const Room_1 = require("../entities/Room");
const rooms_1 = require("../models/rooms");
exports.GET_ALL_ROOM = {
    type: (0, graphql_1.GraphQLList)(rooms_1.TypeRoom),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Room_1.Room.find();
        });
    }
};