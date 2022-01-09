import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import { getAuthUser } from "utils/auth";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new ApolloLink((operation, forward) => {
      const jwtToken = getAuthUser()?.token;

      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
        },
      }));
      return forward(operation);
    }),
    new HttpLink({
      uri: "http://localhost:3000/graphql",
      credentials: "include",
    }),
  ]),
});
