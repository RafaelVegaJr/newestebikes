import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button"; // Importing the Button component
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); // Call once initially
    window.addEventListener("resize", showButton);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []); // Empty dependency array, as this effect should only run once

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    let timerId = null;
    const handleScrollStop = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setIsHidden(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollStop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollStop);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav className={`navbar ${isHidden ? "hide-nav" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CDR <i className="fas fa-bicycle" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click || window.innerWidth > 960 ? "nav-menu active" : "nav-menu"
            }
          >
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" to="/sign-up">
              Sign Up
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
