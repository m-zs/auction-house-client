import React, { FC } from "react";
import { Typography } from "@mui/material";

import { User } from "state/vars";
import { USER_STATUS } from "utils/const/user";
import MenuItem from "../MenuItem";
import { ACCOUNT_SECTION } from "./items";
import * as S from "./styles";

interface Props {
  user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
  const isDisabled = [USER_STATUS.BANNED, USER_STATUS.BLOCKED].includes(
    user.status
  );

  return (
    <>
      <S.UserInfoContainer>
        <div>
          <Typography component="h5" variant="h6">
            Hello {user.username}!
          </Typography>

          <Typography component="p" variant="subtitle2">
            {user.email}
          </Typography>

          {isDisabled && (
            <S.UserStatus data-testid="user-info-status">
              {user.status === USER_STATUS.BLOCKED ? "blocked" : "banned"}
            </S.UserStatus>
          )}
        </div>

        <S.UserIcon />
      </S.UserInfoContainer>

      {ACCOUNT_SECTION.items.map(({ url, text }) => (
        <MenuItem text={text} url={url} key={text} />
      ))}
    </>
  );
};

export default UserInfo;
