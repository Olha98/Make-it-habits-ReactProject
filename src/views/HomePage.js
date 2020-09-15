import React, { Component } from "react";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Regictration from "../components/Registration/Registration";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transitionHome from "./transitionHome.module.css";

class HomePage extends Component {
  state = {
    openLogin: false,
    openRegistration: false,
  };

  loginFunk = () => {
    this.setState((prevState) => {
      return { openLogin: !prevState.openLogin };
    });
  };

  registrationFunk = () => {
    this.setState((prevState) => {
      return { openRegistration: !prevState.openRegistration };
    });
  };

  render() {
    const { openLogin, openRegistration } = this.state;
    return (
      <>
        {/* <TransitionGroup>
          <CSSTransition timeout={500} classNames={transitionHome}> */}
        {openLogin && <Login />}
        {/* </CSSTransition>
        </TransitionGroup> */}
        <Home onLogin={this.loginFunk} onRegistration={this.registrationFunk} />
        {/* <TransitionGroup> */}
        {openRegistration && <Regictration />}
        {/* </TransitionGroup> */}
      </>
    );
  }
}

export default HomePage;
