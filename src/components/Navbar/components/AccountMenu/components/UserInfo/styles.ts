import styled from "styled-components";
import { PersonOutline } from "@mui/icons-material";

export const UserInfoContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.s} ${theme.spacings.m};
    border-bottom: 1px solid ${theme.colors.lightGray};
  `}
`;

export const UserIcon = styled(PersonOutline)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.main};
`;

export const UserStatus = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.white};
    padding: ${theme.spacings.xs} ${theme.spacings.s};
    background: ${theme.colors.error};
    border-radius: 4px;
    display: inline-block;
    margin-top: ${theme.spacings.xs};
    font-size: 0.8rem;
  `}
`;
