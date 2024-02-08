import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BookingSlot from "./BookingSlot";
import { submitAPI, initialAvailableTimes, OCCASIONS } from "../../mockApi";

const BookingForm = (props) => {
  const {
    availableTimes,
    bookingForm,
    setBookingForm,
    dispatch,
  } = props;

  const navigate = useNavigate();

  const [isBooking, setBooking] = useState(false)

  useEffect(() => {
    dispatch({ type: "UPDATE_DATE", payload: { date: bookingForm.resDate } });
  }, [bookingForm.resDate, dispatch]);

  const onFieldChange = (field, value) => {
    setBookingForm((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBooking(true);
    if (!bookingForm.resDate || !bookingForm.resTime || !bookingForm.guests) {
      alert("Please fill in all the fields");
      return;
    }
    const res = await submitAPI(bookingForm);
    if (res) {
      setBookingForm({
        resDate: "",
        resTime: "",
        guests: "",
        occasion: "Birthday",
      });
      navigate("/booking/confirmed");
    } else {
      alert("Failed to make reservation");
    }
    setBooking(false);
  };

  return (
    <form data-testid="form" style={{ display: "grid", gap: "10px" }}>
      <h3>Book a Table</h3>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={bookingForm.resDate}
        onChange={(e) => onFieldChange("resDate", e.target.value)}
        aria-label="Choose date"
        className="form-control"
      />

      {bookingForm.resDate && (
        <>
          <label htmlFor="res-time">Choose time</label>
          <div className="row" style={{ width: "60%" }}>
            {initialAvailableTimes.map((time) => (
              <BookingSlot
                key={time}
                time={time}
                availableTimes={availableTimes}
                onSelectTime={() => onFieldChange("resTime", time)}
                value={bookingForm.resTime}
              />
            ))}
          </div>
        </>
      )}

      {bookingForm.resTime && (
        <>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="Please enter number of guests"
            min="1"
            max="10"
            id="guests"
            value={bookingForm.guests}
            onChange={(e) => onFieldChange("guests", e.target.value)}
            aria-label="Number of guests"
            className="form-control"
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={bookingForm.occasion}
            onChange={(e) => onFieldChange("occasion", e.target.value)}
            aria-label="Occasion"
            className="form-control"
          >
            {OCCASIONS.map((occasion) => (
              <option key={occasion}>{occasion}</option>
            ))}
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            onClick={handleSubmit}
            aria-label="Make Your reservation"
            className="form-control"
            disabled={isBooking}
          />
        </>
      )}
    </form>
  );
};

export default BookingForm;
