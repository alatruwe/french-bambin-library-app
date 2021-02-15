import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

import LandingPage from "./components/LandingPage/LandingPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </BrowserRouter>
    );
  }
}

export default App;
