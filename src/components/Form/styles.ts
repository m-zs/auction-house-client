import styled from "styled-components";
import { Container, Avatar, Box, Alert } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";

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

export const Form = styled(Box)`
  position: relative;
  padding: ${({ theme }) => theme.spacings.xl} 0;
`;

export const ErrorAlert = styled(Alert)`
  margin-bottom: ${({ theme }) => theme.spacings.xl};
  position: relative;
  cursor: pointer;
`;

export const CloseIcon = styled(CancelOutlined)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const LoadingIndicator = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background: rgba(255, 255, 255, 0.85);
`;
