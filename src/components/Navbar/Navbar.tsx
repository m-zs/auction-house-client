import React from "react";
import { Container } from "@mui/material";

import * as S from "./styles";

const pages = [
  { url: "/", text: "Home" },
  { url: "/sign-up", text: "Sign Up" },
  { url: "/sign-in", text: "Sign In" },
];

const Navbar = () => (
  <S.Container>
    <S.StyledAppBar position="sticky">
      <Container>
        <S.InnerContainer>
          {pages.map(({ text, url }) => (
            <S.StyledNavLink to={url} key={text}>
              {text}
            </S.StyledNavLink>
          ))}
        </S.InnerContainer>
      </Container>
    </S.StyledAppBar>
  </S.Container>
);

export default Navbar;
