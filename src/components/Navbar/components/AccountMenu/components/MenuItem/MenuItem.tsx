import React, { FC } from "react";
import { Typography } from "@mui/material";

import * as S from "./styles";

interface Props {
  /** text to display */
  text: string;
  /** anchor url */
  url: string;
}

const MenuItem: FC<Props> = ({ text, url }) => (
  <S.NavItem key={text} to={url}>
    <Typography component="span" variant="subtitle1">
      {text}
    </Typography>
  </S.NavItem>
);
export default MenuItem;
