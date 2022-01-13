import React, { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { Menu, MenuOpen } from "@mui/icons-material";

import { useMatchMedia } from "hooks/match-media";
import { theme } from "styles";
import { userVar } from "state/vars";
import * as S from "./styles";
import { NAV_PAGES } from "./items";
import AccountMenu from "./components/AccountMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMatchMedia(
    `(max-width: ${theme.breakpoints.mobileLarge})`
  );
  const user = useReactiveVar(userVar);

  const onMenuClick = () => {
    setIsOpen((val) => !val);
  };

  const items = NAV_PAGES.filter(
    ({ hideForUser, onlyForLoggedIn }) =>
      (user && !hideForUser) || (!user && !onlyForLoggedIn)
  );

  return (
    <nav>
      <S.StyledAppBar position="sticky">
        {isMobile && (
          <S.MenuButton onClick={onMenuClick} type="button">
            {isOpen ? <MenuOpen /> : <Menu />}
          </S.MenuButton>
        )}

        {(isOpen || !isMobile) && (
          <S.OuterContainer data-testid="navbar-items-container">
            <S.InnerContainer>
              {items.map(({ text, url }) => (
                <S.StyledNavLink to={url} key={text}>
                  {text}
                </S.StyledNavLink>
              ))}
            </S.InnerContainer>

            {user && <AccountMenu user={user} />}
          </S.OuterContainer>
        )}
      </S.StyledAppBar>
    </nav>
  );
};

export default Navbar;
