import React, { Component } from "react";
import Main from "./components/Main/Main";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Contact />
      </div>
    );
  }
}

export default App;
