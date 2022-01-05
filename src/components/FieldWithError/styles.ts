import styled from "styled-components";

export const ErrorMessage = styled.span`
  ${({ theme }) => `
    display: block;
    color: ${theme.colors.error};
    margin-top: ${theme.spacings.xs};
  `}
`;
