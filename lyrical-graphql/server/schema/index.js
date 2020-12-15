import { GraphQLSchema } from 'graphql'
import RootQueryType from './root-query-type'
import mutations from './mutations'

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
})
