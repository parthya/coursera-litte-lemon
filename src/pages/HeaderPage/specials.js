import React from "react";

const Specials = () => {
  return (
    <div className="section">
      <h2>Specials</h2>
      <div className="row">
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=517"
            alt="specials 1"
            className="special-img"
          />
          <h4>Clam and Vegetable Soup</h4>
          <p>
            This savory Clam and Vegetable Soup is a delightful blend of fresh,
            succulent clams and a medley of garden-fresh vegetables. Simmered to
            perfection, each spoonful is a warming embrace of hearty flavors and
            comforting broth, creating a perfect starter for any meal.
          </p>
          <h5>$20</h5>
        </div>
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1603906503589-6a9b9bbbe82a?q=80&w=517"
            alt="specials 2"
            className="special-img"
          />
          <h4>Kimichi Breakfast Stack</h4>
          <p>
            The Kimichi Breakfast Stack is an innovative twist on traditional
            breakfast fare. Featuring layers of fluffy pancakes interlaced with
            spicy, fermented kimchi and topped with a perfectly fried egg, this
            dish is a fusion of flavors. Its combination of tangy, savory, and
            umami tastes makes it an energizing start to the day.
          </p>
          <h5>$25</h5>
        </div>
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1501688356053-ee4bf6c4bffc?q=80&w=517"
            alt="specials 3"
            className="special-img"
          />
          <h4>Corn & Carrots</h4>
          <p>
            This vibrant Corn & Carrots dish is a celebration of simplicity and
            freshness. Sweet, juicy kernels of corn and crisp, tender carrots
            are sautéed together, highlighting their natural flavors. A sprinkle
            of herbs and a dash of seasoning bring out the sweetness and
            earthiness, making it an ideal side dish for any meal.
          </p>
          <h5>$10</h5>
        </div>
      </div>
    </div>
  );
};

export default Specials;
