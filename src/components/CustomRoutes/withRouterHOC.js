import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import  authSelector from "../../redux/selectors/authSelector";

const withAuth = (WrappedComponent) => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: authSelector.isAuthenticated(state),
  });

  return withRouter(connect(mapStateToProps)(WithAuth));
};

export default withAuth;