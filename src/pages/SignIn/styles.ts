import styled from "styled-components";
import { Container, Avatar, Button } from "@mui/material";

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

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ModalButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacings.m};
`;
