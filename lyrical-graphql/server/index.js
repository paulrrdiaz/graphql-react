import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import bodyParser from 'body-parser'
import db from './db'
import schema from './schema'

const app = express()

db()

app.use(bodyParser.json())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
