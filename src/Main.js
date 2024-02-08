import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchAPI } from "./mockApi";

import HomePage from "./pages/HeaderPage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import ConfirmedPage from "./pages/BookingPage/ConfirmedBooking";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE": {
      const { date } = action.payload;
      const availableTimes = fetchAPI(date);
      return availableTimes;
    }
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const todayDate = new Date();
  const res = fetchAPI(todayDate);
  return res;
};

const Main = () => {
  const [bookingForm, setBookingForm] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "Birthday",
  });

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/booking/confirmed" element={<ConfirmedPage />} />
    </Routes>
  );
};

export default Main;
