import React from "react";

import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  const { availableTimes, bookingForm, setBookingForm, dispatch } =
    props;
  return (
    <div className="section">
      <BookingForm
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
