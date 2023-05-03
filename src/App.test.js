import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Johnis happy on page load", () => {
  render(<App />);
  // check if the text "John" is in the class "person-div"
  const johnElement = screen.getByText(/John is happy/i);
  expect(johnElement).toBeInTheDocument();
});

// test john is not happy when his button is clicked
test("John is not happy when his button is clicked", () => {
  render(<App />);

  screen.logTestingPlaygroundURL();
  const buttonElement = screen.getByRole("button", {
    name: /toggle happiness of john/i,
  });
  buttonElement.click();
  render(<App />);

  const notHappyElement = screen.getByText(/john is not happy/i);
  expect(notHappyElement).toBeInTheDocument();
});

//that's great, but how about if we click John's name twice, then click on Jane
// - she should go from not happy to happy

test("Jane is happy when her button is clicked after twice clicking john", async () => {
  render(<App />);

  // make john unhappy
  const johnButtonElement = screen.getByTestId("John", {
    name: /toggle happiness of john/i,
  });
  //fireEvent.click(johnButtonElement);
  await userEvent.click(johnButtonElement);
  let johnElement = await screen.getByText(/John is not happy/i);
  expect(johnElement).toBeInTheDocument();

  //click again and check if john is happy now
  const johnButtonElement2 = screen.getByRole("button", {
    name: /toggle happiness of john/i,
  });
  //fireEvent.click(johnButtonElement);
  await userEvent.click(johnButtonElement2);
  johnElement = await screen.getByText(/John is happy/i);
  expect(johnElement).toBeInTheDocument();

  //check Jane is not happy to start with
  let janeTextElement = await screen.getByText(/Jane is not happy/i);
  expect(janeTextElement).toBeInTheDocument();

  //click Jane's button to make her happy
  const janeButtonElement = screen.getByRole("button", {
    name: /toggle happiness of jane/i,
  });
  //fireEvent.click(janeButtonElement);
  await userEvent.click(janeButtonElement);
  const janeElement = screen.getByText(/Jane is happy/i);
  expect(janeElement).toBeInTheDocument();
});
