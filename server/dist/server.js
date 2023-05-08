"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use('/api_graph', (0, cors_1.default)(), (0, express_graphql_1.graphqlHTTP)((req, res) => ({
    graphiql: true,
    schema: schema_1.schemaUsers,
    context: { req, res, headers: req.headers }
})));
exports.default = app;
