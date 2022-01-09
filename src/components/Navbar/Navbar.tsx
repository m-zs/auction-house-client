import React from "react";
import { Container } from "@mui/material";
import { useReactiveVar } from "@apollo/client";

import { userVar } from "state/vars";
import * as S from "./styles";
import { NAV_PAGES } from "./items";

const Navbar = () => {
  const user = useReactiveVar(userVar);

  const items = NAV_PAGES.filter(
    ({ hideForUser, onlyForLoggedIn }) =>
      (user && !hideForUser) || (!user && !onlyForLoggedIn)
  );

  return (
    <S.Container>
      <S.StyledAppBar position="sticky">
        <Container>
          <S.InnerContainer>
            {items.map(({ text, url }) => (
              <S.StyledNavLink to={url} key={text}>
                {text}
              </S.StyledNavLink>
            ))}
          </S.InnerContainer>
        </Container>
      </S.StyledAppBar>
    </S.Container>
  );
};

export default Navbar;
