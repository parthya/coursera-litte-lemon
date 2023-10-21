import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
