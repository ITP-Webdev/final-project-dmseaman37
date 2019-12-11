import React from "react";
import EmailValidator from "./EmailValidator";
import { render, fireEvent } from "@testing-library/react"

it("fails validation when the email begins with invalid characters", () => {
  const { getByTestId } = render(<EmailValidator email="$@usc.edu" />);

  const input = getByTestId("input");
  fireEvent.click(getByTestId("submit"));
  const message = getByTestId("message");

  expect(message.textContent).toBe("Your email must have a valid handle");
});

it("fails validation when the email has no @ sign", () => {
  const { getByTestId } = render(<EmailValidator email="testemailusc.edu" />);

  const input = getByTestId("input");
  fireEvent.click(getByTestId("submit"));
  const message = getByTestId("message");

  expect(message.textContent).toBe("Your email must have an @ sign");
});

it("fails validation when the email contians an invalid web address", () => {
  const { getByTestId } = render(<EmailValidator email="testemail@7.com" />);

  const input = getByTestId("input");
  fireEvent.click(getByTestId("submit"));
  const message = getByTestId("message");

  expect(message.textContent).toBe("Your email must have a valid web address");
});

it("fails validation when the email has an invalid suffix", () => {
  const { getByTestId } = render(<EmailValidator email="testemail@uscinvalidsuffix" />);

  const input = getByTestId("input");
  fireEvent.click(getByTestId("submit"));
  const message = getByTestId("message");

  expect(message.textContent).toBe("Your email must end with a valid suffix");
});

it("passes validation when a valid email is submitted", () => {
  const { getByTestId } = render(<EmailValidator email="testemail@usc.edu" />);

  const input = getByTestId("input");
  fireEvent.click(getByTestId("submit"));
  const message = getByTestId("message");

  expect(message.textContent).toBe("Your email has been added");
});
