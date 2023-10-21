import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    console.log("Get Started clicked!"); // For testing purposes
    // Add any desired behavior for the "GET STARTED" button here
  };

  const handleTrailerClick = () => {
    navigate("/watch-trailer");
  };

  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>EXPLORE BEYOND</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          type="button"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={handleGetStartedClick}
        >
          GET STARTED
        </Button>
        <Button
          type="button"
          onClick={handleTrailerClick}
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
