import 'dotenv/config'
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import * as express from 'express'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { createConnection } from 'typeorm'
import * as logger from 'loggy'

const PORT = process.env.PORT || 4000

const startServer = async () => {
  const connection = await createConnection()
  
  if (connection.isConnected) {

    // Build the compiled schema and resolver
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
      logger
    })

    const server = new ApolloServer({
      schema,
      context: ({ req }) => {
        const token = req.headers.authorization || ''
        if (token) {
          logger.log(`Passed Authorization token : ${token}`)
        }
        return
      }
    })

    logger.info(`Connected to database ${connection.options.type}`)

    const app = express()
    server.applyMiddleware({ app })
    app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))

  } else {
    logger.error('Something wrong happened !')
  }
}

startServer()
