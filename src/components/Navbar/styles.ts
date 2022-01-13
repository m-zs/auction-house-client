import styled from "styled-components";
import { AppBar, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

export const OuterContainer = styled(Container)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${theme.breakpoints.mobileLarge}) {
      flex-direction: column-reverse;
      justify-content: flex-start;
      padding-bottom: ${theme.spacings.m};
    }
  `}
`;

export const StyledAppBar = styled(AppBar)`
  min-height: 80px;
  padding: 20px;
  justify-content: center;
  position: relative;
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

export const MenuButton = styled.button`
  ${({ theme }) => `
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 20px;
    color: ${theme.colors.white};
    border-radius: 4px;
    padding: 5px;

    &:focus-visible {
      outline: 1px solid ${theme.colors.white}; 
    }
  `}
`;
