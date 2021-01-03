import 'styles/globals.css'
import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const { SERVER_ENDPOINT = 'http://localhost:4000' } = process.env

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <div className="container mx-auto my-2">
      <Component {...pageProps} />
    </div>
  </ApolloProvider>
)

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: `${SERVER_ENDPOINT}/graphql`,
    cache: new InMemoryCache().restore(initialState || {}),
  })
})(App)
