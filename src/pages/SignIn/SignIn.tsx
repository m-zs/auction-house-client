import React, { FC } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { LockOpenOutlined } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { setAuthUser } from "utils/auth";
import { SignInResponse, SIGN_IN } from "api/mutations/sign-in";
import { userValidation } from "utils/validation";
import Form from "components/Form";
import FieldWithError from "components/FieldWithError";
import { theme } from "styles/theme";
import * as S from "./styles";

const schema = yup.object({
  username: userValidation.username,
  password: userValidation.password,
});

interface FormFields {
  username: string;
  password: string;
}

const SignIn: FC = () => {
  const navigate = useNavigate();

  const onSubmitSuccess = (data: SignInResponse) => {
    setAuthUser(data.signIn.token);
    navigate("/", { replace: true });
  };

  return (
    <section>
      <S.StyledContainer maxWidth="xs">
        <S.StyledAvatar>
          <LockOpenOutlined />
        </S.StyledAvatar>

        <Typography component="h1" variant="h4">
          Sign in
        </Typography>

        <Form<FormFields, SignInResponse>
          onSubmitCallback={onSubmitSuccess}
          schema={schema}
          query={SIGN_IN}
          render={({ control }) => (
            <Grid container spacing={theme.spacings.m}>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <FieldWithError
                      {...field}
                      placeholder="Tom"
                      variant="outlined"
                      label="Username *"
                      errorMessage={error?.message}
                      fullWidth
                      inputProps={{ "data-testid": "field-username" }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <FieldWithError
                      {...field}
                      placeholder="password"
                      variant="outlined"
                      label="Password *"
                      type="password"
                      errorMessage={error?.message}
                      fullWidth
                      inputProps={{ "data-testid": "field-password" }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  Sign In
                </Button>
              </Grid>

              <Grid item>
                <Link to="/sign-up">Not a member? Create new account.</Link>
              </Grid>
            </Grid>
          )}
        />
      </S.StyledContainer>
    </section>
  );
};

export default SignIn;
