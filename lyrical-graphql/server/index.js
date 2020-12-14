import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const app = express()

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
