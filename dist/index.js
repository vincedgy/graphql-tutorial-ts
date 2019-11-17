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
require("dotenv/config");
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tools_1 = require("graphql-tools");
const express = require("express");
const resolvers_1 = require("./resolvers");
const typeDefs_1 = require("./typeDefs");
const typeorm_1 = require("typeorm");
const logger = require("loggy");
const PORT = process.env.PORT || 4000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield typeorm_1.createConnection();
    if (connection.isConnected) {
        const schema = graphql_tools_1.makeExecutableSchema({
            typeDefs: typeDefs_1.typeDefs,
            resolvers: resolvers_1.resolvers,
            logger
        });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req }) => {
                const token = req.headers.authorization || '';
                if (token) {
                    logger.log(`Passed Authorization token : ${token}`);
                }
                return;
            }
        });
        logger.info(`Connected to database ${connection.options.type}`);
        const app = express();
        server.applyMiddleware({ app });
        app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
    }
    else {
        logger.error('Something wrong happened !');
    }
});
startServer();
//# sourceMappingURL=index.js.map