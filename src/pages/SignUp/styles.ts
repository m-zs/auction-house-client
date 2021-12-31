import styled from "styled-components";
import { Container, Avatar } from "@mui/material";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
    margin: ${theme.spacings.m};
    background: ${theme.colors.main};
  `}
`;
