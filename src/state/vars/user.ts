import { makeVar } from "@apollo/client";

import { AccessTokenData } from "api/other/access-token";

export type User = {
  token: string;
} & AccessTokenData;

export const userVar = makeVar<User | void>(undefined);
