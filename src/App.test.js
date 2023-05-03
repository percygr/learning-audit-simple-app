import { render, screen } from "@testing-library/react";
import App from "./App";

test("Johns name is there somewhere", () => {
  render(<App />);
  // check if the text "John" is in the document
  const linkElement = screen.getByText(/John/i);
});
