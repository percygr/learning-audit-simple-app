import { render, screen } from "@testing-library/react";
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
  // click johns button
  buttonElement.click();
  render(<App />);
  // check if the text "john is not happy" is in the document
  const notHappyElement = screen.getByText(/john is not happy/i);
  expect(notHappyElement).toBeInTheDocument();
});
