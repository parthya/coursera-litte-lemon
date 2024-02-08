import React from "react";
import { useNavigate } from "react-router-dom";

const HeroComponent = () => {
  const navigate = useNavigate();
  return (
    <div id="hero" className="section">
      <div className="row">
        <div className="column">
          <>
            <h2>Little Lemon</h2>
            <p>
              Little Lemon is a restaurant located in the heart of the city. We
              offer a wide variety of dishes from all over the world. <br />
              <br />
              We are open from 8am to 10pm every day. <br />
              <br />
              Whether you're craving a classic comfort food or an adventurous
              new flavor, Little Lemon is the perfect place for any dining
              occasion. Join us for a memorable culinary journey that tantalizes
              your taste buds and leaves you longing for more.
            </p>
          </>
          <button className="bg-btn" onClick={() => navigate("/booking")}>
            Book a table
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=517"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
