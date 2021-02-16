import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

import LandingPage from "./components/LandingPage/LandingPage";
import ItemList from "./components/ItemList/ItemList";
import SendRequestForm from "./components/SendRequestForm/SendRequestForm";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/home" component={ItemList} />
        <Route path="/request" component={SendRequestForm} />
      </BrowserRouter>
    );
  }
}

export default App;
