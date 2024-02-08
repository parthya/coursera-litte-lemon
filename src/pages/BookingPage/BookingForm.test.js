import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";

test("renders BookingForm component", () => {
  render(
    <BrowserRouter>
      <BookingForm bookingForm={{}} dispatch={() => null} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Book a Table/i);
  expect(linkElement).toBeInTheDocument();
});
