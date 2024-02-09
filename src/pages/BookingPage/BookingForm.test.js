import React, { useState } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";

function TestWrapper({ children }) {
  const [testBookingForm, setTestBookingForm] = useState({
    resDate: "2024-02-09",
  });
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return React.cloneElement(children, {
    bookingForm: testBookingForm,
    setBookingForm: setTestBookingForm,
    dispatch: () => null, // Mock dispatch function
    availableTimes: availableTimes,
  });
}

test("renders BookingForm component", () => {
  render(
    <BrowserRouter>
      <TestWrapper>
        <BookingForm />
      </TestWrapper>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Book a Table/i);
  expect(linkElement).toBeInTheDocument();
});

test("submits form with all fields filled", async () => {
  render(
    <BrowserRouter>
      <TestWrapper>
        <BookingForm />
      </TestWrapper>
    </BrowserRouter>
  );

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2024-02-10" },
  });

  // Use findByText with await
  const timeSlotButton = await screen.findByText("18:00");
  fireEvent.click(timeSlotButton);

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "Birthday" },
  });

  expect(screen.getByLabelText("Make Your reservation")).not.toBeDisabled();
});

test("wrong guest number", async () => {
  render(
    <BrowserRouter>
      <TestWrapper>
        <BookingForm />
      </TestWrapper>
    </BrowserRouter>
  );

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2024-02-10" },
  });

  // Use findByText with await
  const timeSlotButton = await screen.findByText("18:00");
  fireEvent.click(timeSlotButton);

  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "11" },
  });

  expect(screen.getByLabelText("Make Your reservation")).toBeDisabled();
});
