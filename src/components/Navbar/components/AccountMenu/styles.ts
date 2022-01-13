import styled from "styled-components";
import { Tab } from "@mui/material";

export const Container = styled.div`
  ${({ theme }) => `
    margin-left: ${theme.spacings.l};

    @media (max-width: ${theme.breakpoints.mobileLarge}) {
      margin-top: 30px;
      margin-bottom: ${theme.spacings.m};
      margin-left: 0;
    }
  `}
`;

export const StyledTab = styled(Tab)`
  ${({ theme }) => `
    padding: ${theme.spacings.m};
    border-bottom: 1px solid ${theme.colors.lightGray};

    &:hover {
      background: ${theme.colors.lightGray};
    }
  `}
`;
