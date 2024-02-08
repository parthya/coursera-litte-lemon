import React from "react";

const BookingSlot = (props) => {
  const { time, availableTimes, onSelectTime, value } = props;

  const isAvailable = availableTimes.includes(time);
  const isSelected = value === time;

  const handleSelect = (e) => {
    e.preventDefault();
    onSelectTime();
  };

  return (
    <button
      className={isAvailable ? isSelected ? "selected-slot" : "available-slot" : "booked-slot"}
      onClick={handleSelect}
      disabled={!isAvailable}
    >
      <p>{time}</p>
    </button>
  );
};

export default BookingSlot;
