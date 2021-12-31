import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { gql } from "@apollo/client";

import Form from "components/Form";
import { theme } from "styles/theme";
import * as S from "./styles";

const schema = yup.object({
  username: yup.string().min(3).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(60).required(),
});

const SIGN_UP = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(
      user: { username: $username, email: $email, password: $password }
    ) {
      id
      username
    }
  }
`;

interface FormFields {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  return (
    <section>
      <S.StyledContainer maxWidth="xs">
        <S.StyledAvatar>
          <LockOutlined />
        </S.StyledAvatar>

        <Typography component="h1" variant="h4">
          Sign up
        </Typography>

        <Form<FormFields>
          schema={schema}
          query={SIGN_UP}
          render={({ control }) => (
            <Grid container spacing={theme.spacings.m}>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      placeholder="Tom"
                      variant="outlined"
                      label="Username *"
                      helperText={error?.message}
                      error={!!error}
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      placeholder="example-email@web.com"
                      variant="outlined"
                      label="Email *"
                      helperText={error?.message}
                      error={!!error}
                      fullWidth
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
                    <TextField
                      {...field}
                      placeholder="password"
                      variant="outlined"
                      label="Password *"
                      type="password"
                      helperText={error?.message}
                      error={!!error}
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  Sign Up
                </Button>
              </Grid>

              <Grid item>
                <Link to="/sign-in">Already have an account?</Link>
              </Grid>
            </Grid>
          )}
        />
      </S.StyledContainer>
    </section>
  );
};

export default SignUp;
