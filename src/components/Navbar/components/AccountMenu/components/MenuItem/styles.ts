import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  ${({ theme }) => `
    padding: ${theme.spacings.s} ${theme.spacings.m};

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }

    &:hover {
      background: ${theme.colors.lightGray};
    }
  `}
`;
