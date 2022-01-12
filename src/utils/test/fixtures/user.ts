import * as faker from "faker";

import { User } from "state/vars";
import { USER_ROLE, USER_STATUS } from "utils/const/user";

export const createUser = ({
  id = faker.datatype.uuid(),
  username = faker.internet.userName(),
  email = faker.internet.email(),
  role = USER_ROLE.USER,
  iat = new Date().getTime(),
  exp = new Date().getTime() * 2,
  status = USER_STATUS.ACTIVE,
  token = "token",
}: Partial<User> = {}): User => ({
  id,
  username,
  email,
  role,
  iat,
  exp,
  status,
  token,
});
