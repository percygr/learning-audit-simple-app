import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import App from "./App";

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

test("Jane is happy when her button is clicked after twice clicking john", () => {
  render(<App />);

  // make john unhappy
  const johnButtonElement = screen.getByRole("button", {
    name: /toggle happiness of john/i,
  });
  fireEvent.click(johnButtonElement);
  let johnElement = screen.getByText(/John is not happy/i);
  expect(johnElement).toBeInTheDocument();

  //check if john is happy again
  const johnButtonElement2 = screen.getByRole("button", {
    name: /toggle happiness of john/i,
  });
  fireEvent.click(johnButtonElement2);
  johnElement = screen.getByText(/John is happy/i);
  expect(johnElement).toBeInTheDocument();

  //check Jane is not happy to start with
  const janeTextElement = screen.getByText(/Jane is not happy/i);
  expect(janeTextElement).toBeInTheDocument();

  //try to click Jane's button
  const janeButtonElement = screen.getByRole("button", {
    name: /toggle happiness of jane/i,
  });
  fireEvent.click(janeButtonElement);
  const janeElement = screen.getByText(/Jane is happy/i); // well, shit. Cheer up Jane
  expect(janeElement).toBeInTheDocument();
});
