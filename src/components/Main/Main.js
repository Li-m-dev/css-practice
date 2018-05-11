import React from "react";
import "./Main.css";
import hero from "../../assets/logo.svg";

export default () => (
  <main>
    <img src={hero} className="hero" alt="logo" />
    <h1>Discover. Learn. Elevate </h1>
    <p>
      Introducing the best practices, stories, and insights from the worlds top
      design leaders. Loaded with in-depth books, podcasts, and more,
      DesignBetter.Co is your essential guide to building remarkable products
      and teams.
    </p>
    <button className="sttBtn"> START EXLORING </button>
  </main>
);
