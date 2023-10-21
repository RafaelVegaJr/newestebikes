import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import VideoPlayer from "./components/VideoPlayer";
import Services from "./pages/Services";
// import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import ProtectedRoute from "./path-to-your-protected-route-component";

const App = () => {
  <h1>Hello</h1>;
  console.log("Are you working");
  return (
    // <Auth0Provider
    // domain="dev-hgmqfdn6h1uohhld.us.auth0.com"
    // clientId="bncvPbYM66lwG06SQrII1dp8hqH6QewP"
    // redirectUri={window.location.origin}
    // >

    <Router>
      <Navbar />
      <Routes>
        <Route path="/watch-trailer" element={<VideoPlayer />} />

        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    // </Auth0Provider>;
  );
};

export default App;
