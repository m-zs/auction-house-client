import styled from "styled-components";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Container = styled.nav``;

export const StyledAppBar = styled(AppBar)`
  min-height: 80px;
  padding: 20px;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 20px;

  &.active {
    text-decoration: underline;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -20px;
`;
