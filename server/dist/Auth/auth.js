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
exports.tokenVerify = exports.genToken = exports.comparePass = void 0;
require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../config");
const comparePass = (inputPass, pass) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield bcryptjs_1.default.compare(inputPass, pass);
    return res;
});
exports.comparePass = comparePass;
const genToken = (userId) => (jsonwebtoken_1.default.sign({ id: userId }, config_1.KEY_SECRET));
exports.genToken = genToken;
const tokenVerify = (token) => {
    try {
        const decode = jsonwebtoken_1.default.verify(token, config_1.KEY_SECRET);
        if (!(decode === null || decode === void 0 ? void 0 : decode.id))
            return false;
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.tokenVerify = tokenVerify;
