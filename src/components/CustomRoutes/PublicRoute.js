import React from "react";
import { Route, Redirect } from "react-router-dom";
import withRouterHOC from "./withRouterHOC";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/profile" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default withRouterHOC(PublicRoute);
