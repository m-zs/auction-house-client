import "graphql";

declare module "graphql" {
  export interface GraphQLError {
    message: string[] | string;
    statusCode: number;
    code: string;
  }
}
