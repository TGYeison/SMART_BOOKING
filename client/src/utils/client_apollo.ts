import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/api_graph',
  }),
  cache: new InMemoryCache()
});

export default client;