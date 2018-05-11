import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";

export default () => (
  <nav>
    <div className="logo-content">
      <img src={logo} className="logo" alt="logo" />
      <span> DesignBetter.co </span>
    </div>
    <div className="link-container">
      <div>BOOKS</div>
      <div>PODCAST</div>
      <div>WORKSHOPS</div>
      <div>CONVERSATIONS</div>
    </div>
    <button className="sub"> SUBSCRIBE</button>
  </nav>
);
