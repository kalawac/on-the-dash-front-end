import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders import data button in nav", () => {
  render(<App />);
  const navElement = screen.getByText(/Import Data/i);
  expect(navElement).toBeInTheDocument();
});
