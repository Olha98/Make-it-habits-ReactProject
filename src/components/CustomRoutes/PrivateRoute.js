import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterHOC from './withRouterHOC';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default withRouterHOC(PrivateRoute);
