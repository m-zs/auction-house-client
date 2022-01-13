import React, { FC, useState } from "react";
import { Tooltip, Avatar, IconButton, Menu, Tabs } from "@mui/material";

import { User } from "state/vars";
import { MENU_ITEMS } from "./items";
import TabPanel from "./components/TabPanel";
import MenuItem from "./components/MenuItem";
import UserInfo from "./components/UserInfo";
import * as S from "./styles";

interface Props {
  user: User;
}

const AccountMenu: FC<Props> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);

  return (
    <S.Container data-testid="account-menu">
      <Tooltip title="Account">
        <IconButton
          data-testid="account-menu-avatar"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <Avatar>{user.username[0].toUpperCase()}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Tabs value={tabValue} onChange={(_, val) => setTabValue(val)}>
          {MENU_ITEMS.map(({ name }) => (
            <S.StyledTab key={name} label={name} />
          ))}
          <S.StyledTab label="Account" />
        </Tabs>

        {MENU_ITEMS.map(({ name, items }, i) => (
          <TabPanel key={name} active={tabValue === i}>
            {items.map(({ url, text }) => (
              <MenuItem text={text} url={url} key={text} />
            ))}
          </TabPanel>
        ))}

        <TabPanel active={tabValue === MENU_ITEMS.length}>
          <UserInfo user={user} />
        </TabPanel>
      </Menu>
    </S.Container>
  );
};

export default AccountMenu;
