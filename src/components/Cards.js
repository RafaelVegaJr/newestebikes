import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these serene landscapes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              text="Journey through Valley's scenic wonders with the ease of our premium e-bikes"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-5.png"
              text="Redefine your Coachella Valley experience by cruising its terrains on our e-bikes"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.png"
              text="Discover Coachella's hidden gems effortlessly with our top-tier e-bike rentals"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.png"
              text="Transform your Coachella journey with our eco-friendly e-bike adventures"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-2.png"
              text="Unwind and explore: Coachella's vistas are best savored on our e-bikes"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
