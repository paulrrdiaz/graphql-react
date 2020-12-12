import {
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql'
import find from 'lodash/find'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

const users = [
  { id: '23', firstName: 'Paul', age: 30 },
  { id: '10', firstName: 'rhys', age: 20 },
]

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return find(users, { id: args.id })
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQuery,
})
