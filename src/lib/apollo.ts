import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9z4ze1job01xi4cqtht6s/master',
  cache: new InMemoryCache()
})