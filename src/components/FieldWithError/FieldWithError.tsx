import React, { FC, forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

import * as S from "./styles";

type Props = TextFieldProps & {
  /** Error message to display */
  errorMessage?: string;
};

const FieldWithError = forwardRef<HTMLDivElement, Props>(
  ({ errorMessage, ...fieldProps }, ref) => (
    <div>
      <TextField {...fieldProps} error={!!errorMessage} ref={ref} />

      {errorMessage && (
        <S.ErrorMessage role="alert">{errorMessage}</S.ErrorMessage>
      )}
    </div>
  )
);

export default FieldWithError;
