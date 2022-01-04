import React, { FC } from "react";
import { Typography } from "@mui/material";

import * as S from "./styles";

interface Props {
  /** Modal status, if true component will be shown */
  open?: boolean;
  /** Modal heading text */
  heading: string;
  /** Callback to run on popup close. If not provided modal cant be closed */
  onClose?: () => void;
}

const Modal: FC<Props> = ({ open = false, heading, onClose, children }) => (
  <S.Popup open={open} onClose={onClose}>
    <S.StyledContainer maxWidth="xs">
      <S.Header>
        <Typography component="h2" variant="h5">
          {heading}
        </Typography>

        {onClose && (
          <S.Button type="button" onClick={onClose}>
            <S.Close onClick={onClose} />
          </S.Button>
        )}
      </S.Header>

      {children}
    </S.StyledContainer>
  </S.Popup>
);

export default Modal;
