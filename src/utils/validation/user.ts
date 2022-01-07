import * as yup from "yup";

export const userValidation = {
  username: yup.string().min(3).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(60).required(),
};
