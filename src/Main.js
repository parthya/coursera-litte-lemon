import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HeaderPage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
      <Route path="/order" element={<OrderPage />}></Route>
    </Routes>
  );
};

export default Main;
