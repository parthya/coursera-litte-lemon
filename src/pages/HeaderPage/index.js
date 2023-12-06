import React from "react";

import HeroComponent from './hero';
import Specials from './specials';
import Testimonials from './testimonials';

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <Specials />
      <Testimonials />
    </>
  );
};

export default HomePage;
