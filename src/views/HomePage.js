import React, { Component } from 'react';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Regictration from '../components/Registration/Registration';
import { CSSTransition } from 'react-transition-group';
import transitionHome from './transitionHome.module.css';
import transitionLogin from './transitionLogin.module.css';
class HomePage extends Component {
  state = {
    openLogin: false,
    openRegistration: false,
  };

  loginFunk = () => {
    this.setState(prevState => {
      return { openLogin: !prevState.openLogin, openRegistration: false };
    });
  };

  registrationFunk = () => {
    this.setState(prevState => {
      return {
        openRegistration: !prevState.openRegistration,
        openLogin: false,
      };
    });
  };

  btnClose = () => {
    this.setState(prevState => {
      return {
        openLogin: !prevState.openLogin,
        openRegistration: !prevState.openRegistration,
      };
    });
  };

  render() {
    const { openLogin, openRegistration } = this.state;
    return (
      <>
        <CSSTransition
          in={openLogin}
          timeout={1000}
          classNames={transitionLogin}
          unmountOnExit
        >
          <Login btnClose={this.btnClose} isOpen={openLogin} />
        </CSSTransition>

        <Home onLogin={this.loginFunk} onRegistration={this.registrationFunk} />

        <CSSTransition
          in={openRegistration}
          timeout={1000}
          classNames={transitionHome}
          unmountOnExit
        >
          <Regictration btnClose={this.btnClose} />
        </CSSTransition>
      </>
    );
  }
}

export default HomePage;
