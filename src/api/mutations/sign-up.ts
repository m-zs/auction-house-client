import { gql } from "@apollo/client";

export interface SignUpResponse {
  createUser: {
    id: string;
  };
}

export const SIGN_UP = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(
      user: { username: $username, email: $email, password: $password }
    ) {
      id
    }
  }
`;
