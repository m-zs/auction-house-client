import styled from "styled-components";
import { Container, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export const Popup = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled(Container)`
  ${({ theme }) => `
    background: ${theme.colors.white};
    padding: ${theme.spacings.l};
    border-radius: 4px;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => `
    border-bottom: 1px solid #ededed;
    padding-bottom: ${theme.spacings.s};
    margin-bottom: ${theme.spacings.s};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Close = styled(CancelIcon)`
  ${({ theme }) => `
      color: ${theme.colors.main};
      cursor: pointer;

      &:hover {
        color: ${theme.colors.mainHighlight};
      }
    `}
`;

export const Button = styled.button`
  all: unset;

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.main} solid 1px;
  }
`;
