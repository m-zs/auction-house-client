import jwtDecode from "jwt-decode";

import { User, userVar } from "state/vars";

export const setAuthUser = (token: string) => {
  const user = jwtDecode<Omit<User, "token">>(token);

  if (user) {
    userVar({ token, ...user });
  }
};

export const getAuthUser = () => userVar();
