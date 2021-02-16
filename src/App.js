import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

import LandingPage from "./components/LandingPage/LandingPage";
import ItemList from "./components/ItemList/ItemList";
import SendRequestForm from "./components/SendRequestForm/SendRequestForm";
import AddItem from "./components/AddItem/AddItem";
import RequestHistory from "./components/RequestHistory/RequestHistory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  handleAuthSubmit = () => {
    this.setState({ auth: true });
  };

  handleLogOut = () => {
    this.setState({ auth: false });
  };

  render() {
    const auth = this.state.auth;
    return (
      <BrowserRouter>
        <NavBar auth={auth} handleLogOut={this.handleLogOut} />
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/login"
          render={() => <LoginForm handleAuthSubmit={this.handleAuthSubmit} />}
        />
        <Route
          path="/signup"
          render={() => <SignupForm handleAuthSubmit={this.handleAuthSubmit} />}
        />
        <Route path="/home" component={ItemList} />
        <Route path="/request" component={SendRequestForm} />
        <Route path="/add-item" component={AddItem} />
        <Route path="/request-history" component={RequestHistory} />
      </BrowserRouter>
    );
  }
}

export default App;
