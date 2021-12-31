import React, { useState } from "react";
import { Control, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DocumentNode, useMutation } from "@apollo/client";
import { ObjectSchema } from "yup";
import { CircularProgress, Typography } from "@mui/material";

import * as S from "./styles";
import {
  mapErrorStringsToInfoObjects,
  parseErrorStringToInfoObject,
  STATUS_CODES_TO_MAP_FIELDS,
} from "./utils";

interface Props<FormFields> {
  schema: ObjectSchema<any>;
  render: (control: Control<FormFields>) => JSX.Element;
  query: DocumentNode;
  onSubmitCallback?: (data: FormFields) => void;
}

const Form = <FormFields,>({
  schema,
  render,
  query,
  onSubmitCallback,
}: Props<FormFields>) => {
  const [mutation, { loading }] = useMutation(query, { errorPolicy: "all" });
  const [formError, setFormError] = useState("");
  const { handleSubmit, control, setError } = useForm<FormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      setFormError("");

      await mutation({
        variables: data,
        update: (_, { errors, data }) => {
          const error = errors?.[0];

          if (error) {
            const msg = error.message;

            if (STATUS_CODES_TO_MAP_FIELDS.includes(error.statusCode)) {
              if (Array.isArray(msg)) {
                mapErrorStringsToInfoObjects(msg).forEach(
                  ({ message, field }) => {
                    setError(field as any, { message });
                  }
                );
              } else {
                const { field, message } = parseErrorStringToInfoObject(msg);

                setError(field as any, { message });
              }
            } else {
              setFormError(typeof msg === "string" ? msg : msg.join());
            }
          }

          if (onSubmitCallback) onSubmitCallback(data);
        },
      });
    } catch (err) {
      let errMessage = "Unexpected error. Please try again later";

      if (err instanceof Error) errMessage = err.message;

      setFormError(errMessage);
    }
  };

  return (
    <S.Form
      component="form"
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FormFields>)}
    >
      {loading && (
        <S.LoadingIndicator>
          <CircularProgress />

          <Typography component="p" variant="h6">
            Working on your request...
          </Typography>
        </S.LoadingIndicator>
      )}

      {formError && (
        <S.ErrorAlert severity="error" onClick={() => setFormError("")}>
          <S.CloseIcon />

          {formError}
        </S.ErrorAlert>
      )}

      {render(control)}
    </S.Form>
  );
};

export default Form;
