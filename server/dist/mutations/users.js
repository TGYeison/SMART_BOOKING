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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_USER = exports.DELETE_USER = exports.LOG_IN = exports.CREATE_USER = exports.VERIFY = void 0;
const graphql_1 = require("graphql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = require("../entities/User");
const users_1 = require("../models/users");
const auth_1 = require("../Auth/auth");
exports.VERIFY = {
    type: graphql_1.GraphQLBoolean,
    resolve(_, args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = context.headers.authorization;
            const state = yield (0, auth_1.tokenVerify)(token);
            return state;
        });
    }
};
exports.CREATE_USER = {
    type: users_1.Auth,
    args: {
        name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        e_mail: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        role: { type: graphql_1.GraphQLString },
        birth_date: { type: graphql_1.GraphQLString },
        document: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        type_document: { type: graphql_1.GraphQLString },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, last_name, e_mail, phone, gender, role, birth_date, document, password, type_document } = args;
            const cryptoPass = yield bcryptjs_1.default.hash(password, 10);
            try {
                const res = yield User_1.User.insert({
                    name,
                    last_name,
                    e_mail,
                    phone,
                    gender: parseInt(gender),
                    role: parseInt(role),
                    birth_date,
                    document,
                    password: cryptoPass,
                    type_document: parseInt(type_document)
                });
                const token = (0, auth_1.genToken)(res.identifiers[0].id);
                return {
                    id: res.identifiers[0].id,
                    name: name,
                    token_access: token
                };
            }
            catch (error) {
                console.log(error);
                throw new Error('error creating user');
            }
        });
    }
};
exports.LOG_IN = {
    type: users_1.Auth,
    args: {
        name: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = args;
            try {
                const user = yield User_1.User.findOneBy({ name: name });
                if (!(user === null || user === void 0 ? void 0 : user.password)) {
                    throw new Error('user not found');
                }
                const valid = yield (0, auth_1.comparePass)(password, user.password);
                if (!valid) {
                    throw new Error('password incorrect');
                }
                const token = (0, auth_1.genToken)(user.id);
                return {
                    id: user.id,
                    name: name,
                    token_access: token
                };
            }
            catch (error) {
                console.log(error);
                throw new Error('Denied access password');
            }
        });
    }
};
exports.DELETE_USER = {
    type: graphql_1.GraphQLBoolean,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield User_1.User.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
exports.UPDATE_USER = {
    type: users_1.TypeUser,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            const result = yield User_1.User.delete(id);
            if (result.affected == 1)
                return true;
            return false;
        });
    }
};
