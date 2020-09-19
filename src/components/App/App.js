import React, { Suspense, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import routes from '../../routes';
import Spinner from '../Spinner/Spinner';
import { connect } from 'react-redux';
import { getGlobalState } from '../../redux/operations/stateOperation';
import '../../css/vars.module.css';
import '../../index.module.css';

// import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

const App = ({ getGlobalState, token }) => {
  const [isTestOpen, changeStateIsOpen] = useState(false);

  useEffect(() => {
    console.log('MOUNT');
    getGlobalState();
  }, [token]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.access_token,
  };
};

export default connect(mapStateToProps, { getGlobalState })(App);
