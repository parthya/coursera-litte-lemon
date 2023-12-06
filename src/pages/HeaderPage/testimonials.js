import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials" className="section">
      <h2>Testimonials</h2>
      <div className="row">
        <div className="column">
          <blockquote>
            <img
              src="https://images.unsplash.com/photo-1575433287483-8ec588f72417?q=80&w=517"
              alt="testimonials 1"
              className="testi-img"
            />
            <p>
              "I recently visited Little Lemon for a business lunch and was
              absolutely blown away by the Clam and Vegetable Soup. It was a
              symphony of flavors in every bite. The cozy ambiance and the
              attentive staff added to the delightful experience. I'm already
              planning my next visit to try more of their exquisite menu!"
            </p>
            <cite>Isabella, 27, School Teacher</cite>
          </blockquote>
        </div>
        <div className="column">
          <blockquote>
            <img
              src="https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?q=80&w=517"
              alt="testimonials 2"
              className="testi-img"
            />
            <p>
              "The Kimichi Breakfast Stack at Little Lemon is a game-changer!
              It's the perfect blend of spicy and savory, and it really
              kick-starts my day. As a vegetarian, I am always looking for
              creative and tasty options, and Little Lemon never disappoints.
              Their warm and welcoming atmosphere makes it my go-to spot for
              weekend brunches with friends."
            </p>
            <cite>Samantha, 34, Graphic Designer</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
