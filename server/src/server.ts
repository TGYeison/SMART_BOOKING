import express from "express";
import { graphqlHTTP } from 'express-graphql';
import { schemaUsers } from './schema'
import cors from 'cors';

const app = express();

app.use('/', (req, res) => {
    res.json({msg: "GraphQL Api"})
});

app.use(
    '/api_graph',
    cors(),
    graphqlHTTP((req, res)=>({
        graphiql: true,
        schema: schemaUsers,
        context: { req, res, headers:req.headers}
    }))
);


export default app;