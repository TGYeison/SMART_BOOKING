import express from "express";
import { graphqlHTTP } from 'express-graphql';
import { schemaUsers } from './schema'

const app = express();

app.use('/api_graph', graphqlHTTP({
    graphiql: true,
    schema: schemaUsers
}));


export default app;