import { gql } from "@apollo/client";

export interface RefreshTokenResponse {
  refresh: {
    token: string;
  };
}

export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refresh {
      token
    }
  }
`;
