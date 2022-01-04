import React from "react";
import { gql } from "@apollo/client";
import * as yup from "yup";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as faker from "faker";

import { customRender } from "utils/test";
import Form from "./Form";
import {
  STATUS_CODES_TO_MAP_FIELDS,
  parseErrorStringToInfoObject,
  mapErrorStringsToInfoObjects,
} from "./utils";

describe("Form - component", () => {
  const query = gql`
    mutation Test {
      id
    }
  `;
  const setup = ({ mocks }: { mocks?: any } = {}) => {
    const fn = jest.fn();
    const schema = yup.object({
      name: yup.string().min(5).required(),
      email: yup.string().email().required(),
    });

    customRender(
      <Form<{ name: string; email: string }, { id: number }>
        query={query}
        schema={schema}
        onSubmitCallback={fn}
        render={({ register, errors }) => (
          <div>
            <input data-testid="field-name" {...register("name")} />
            {errors.name && <p role="alert">{errors.name.message}</p>}

            <input
              data-testid="field-email"
              type="email"
              {...register("email")}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}

            <button type="submit">submit</button>
          </div>
        )}
      />,
      { wrapperProps: { mocks } }
    );

    return { fn };
  };

  it("should render proper render prop structure", () => {
    const schema = yup.object({});

    customRender(
      <Form query={query} schema={schema} render={() => <h1>test</h1>} />
    );

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("test");
  });

  it("should validate on submit with provided schema", async () => {
    setup();

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBe(2);
    });

    userEvent.type(screen.getByTestId("field-name"), faker.internet.userName());
    userEvent.type(screen.getByTestId("field-email"), faker.internet.email());

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.queryAllByRole("alert").length).toBe(0);
    });
  });

  it("should call provided callback on successful form submission", async () => {
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const mocks = [
      {
        request: {
          query,
          variables: { name, email },
        },
        result: { data: { id: 1 } },
      },
    ];

    const { fn } = setup({ mocks });

    userEvent.type(screen.getByTestId("field-name"), name);
    userEvent.type(screen.getByTestId("field-email"), email);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(fn).toHaveBeenCalled();
    });

    expect(screen.queryAllByRole("alert").length).toBe(0);
  });

  it("should render fields errors from update function", async () => {
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const mocks = [
      {
        request: {
          query,
          variables: { name, email },
        },
        result: {
          errors: [
            {
              message: ["name is invalid", "email is invalid"],
              statusCode: STATUS_CODES_TO_MAP_FIELDS[0],
            },
          ],
        },
      },
    ];

    setup({ mocks });

    userEvent.type(screen.getByTestId("field-name"), name);
    userEvent.type(screen.getByTestId("field-email"), email);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.queryAllByRole("alert").length).toBe(2);
    });
  });

  it("should render form error on failed submission", async () => {
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const mocks = [
      {
        request: {
          query,
          variables: { name, email },
        },
        error: new Error("error"),
      },
    ];

    setup({ mocks });

    userEvent.type(screen.getByTestId("field-name"), name);
    userEvent.type(screen.getByTestId("field-email"), email);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.queryAllByRole("alert").length).toBe(1);
    });
  });
});

describe("Form - utils", () => {
  describe("parseErrorStringToInfoObject", () => {
    it("should parse string to valid object", () => {
      const result = parseErrorStringToInfoObject("password is invalid");

      expect(result).toMatchObject({
        message: "Password is invalid",
        field: "password",
      });
    });
  });

  describe("mapErrorStringsToInfoObjects", () => {
    it("should return array of valid objects", () => {
      const result = mapErrorStringsToInfoObjects([
        "password is invalid",
        "email is invalid",
      ]);

      expect(result).toMatchObject([
        {
          message: "Password is invalid",
          field: "password",
        },
        {
          message: "Email is invalid",
          field: "email",
        },
      ]);
    });
  });
});
