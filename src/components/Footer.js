import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Coachella DesetRider newsletter to receive our best deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscirbe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>COMPANY</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">About us</Link>
            <Link to="/">Rewards</Link>
            <Link to="/">Contact us</Link>
          </div>
          <div className="footer-link-items">
            <h2>E-BIKES</h2>
            <Link to="/sign-up">All Electric Bikes</Link>
            <Link to="/">Commuting Ebikes</Link>
            <Link to="/">Fat TIre Ebikes</Link>
            <Link to="/">Folding Ebikes</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>COMMUNITY</h2>
            <Link to="/sign-up">Events</Link>
            <Link to="/">E-Bike Safety </Link>
            <Link to="/">Investors</Link>
            <Link to="/">Videos</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              CDR <i className="fas fa-bicycle"></i>
            </Link>
          </div>
          <small className="website-rights">CDR 2023</small>

          {/* The rest of your original icons, if you still need them */}
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/@RAFAELV27531015"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
