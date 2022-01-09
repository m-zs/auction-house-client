import { makeVar } from "@apollo/client";

export interface GlobalMessage {
  message: string;
  type: "error" | "information";
}

export const globalMessageVar = makeVar<GlobalMessage | void>(undefined);
