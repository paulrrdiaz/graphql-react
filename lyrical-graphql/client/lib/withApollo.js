import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const { SERVER_ENDPOINT } = process.env

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: `${SERVER_ENDPOINT}/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  },
)
