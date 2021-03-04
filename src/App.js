import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import LandingPage from "./components/LandingPage/LandingPage";
import ItemList from "./components/ItemList/ItemList";
import SendRequestForm from "./components/SendRequestForm/SendRequestForm";
import AddItem from "./components/AddItem/AddItem";
import ItemHistory from "./components/ItemHistory/ItemHistory";
import TokenService from "./services/token-services";
import IdleService from "./services/idle-service";
import AuthApiService from "./services/auth-api-services";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  handleAuthSubmit = () => {
    if (TokenService.hasAuthToken()) {
      this.setState({ auth: true });
    }
  };

  handleLogOut = () => {
    TokenService.clearAuthToken();
    this.setState({ auth: false });
  };

  componentDidMount() {
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle);

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      IdleService.regiserIdleTimerResets();

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets();
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken();
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry();
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets();
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.setState({ auth: false });
    this.forceUpdate();
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
        <Route path="/item-history" component={ItemHistory} />
      </BrowserRouter>
    );
  }
}

export default App;
