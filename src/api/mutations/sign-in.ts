import { gql } from "@apollo/client";

export interface SignInResponse {
  signIn: {
    token: string;
  };
}

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(credentials: { username: $username, password: $password }) {
      token
    }
  }
`;
