import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { getAuthUser } from "utils/auth";
import { SignUpResponse, SIGN_UP } from "api/mutations/sign-up";
import Form from "components/Form";
import Modal from "components/Modal";
import FieldWithError from "components/FieldWithError";
import { theme } from "styles/theme";
import { userValidation } from "utils/validation";
import * as S from "./styles";

const schema = yup.object({
  username: userValidation.username,
  email: userValidation.email,
  password: userValidation.password,
});

interface FormFields {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [isSuccessModalActive, setIsSuccessModalActive] = useState(false);

  const onSubmitSuccess = (data: SignUpResponse) => {
    setIsSuccessModalActive(true);
  };

  return (
    <section>
      <S.StyledContainer maxWidth="xs">
        <S.StyledAvatar>
          <LockOutlined />
        </S.StyledAvatar>

        <Typography component="h1" variant="h4">
          Sign up
        </Typography>

        <Form<FormFields, SignUpResponse>
          onSubmitCallback={onSubmitSuccess}
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
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <FieldWithError
                      {...field}
                      placeholder="example-email@web.com"
                      variant="outlined"
                      label="Email *"
                      errorMessage={error?.message}
                      inputProps={{ "data-testid": "field-email" }}
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

      <Modal
        open={isSuccessModalActive}
        onClose={() => setIsSuccessModalActive(false)}
        heading="Success!"
      >
        <S.ModalContentContainer data-testid="success-modal">
          <Typography component="h3" variant="subtitle1">
            Hello {getAuthUser()}, we hope you will have a good time. If you
            would like to sign in to your account - use the button below!
          </Typography>

          <S.ModalButton
            fullWidth
            variant="contained"
            onClick={() => navigate("/sign-in", { replace: true })}
          >
            Go to login page
          </S.ModalButton>
        </S.ModalContentContainer>
      </Modal>
    </section>
  );
};

export default SignUp;
