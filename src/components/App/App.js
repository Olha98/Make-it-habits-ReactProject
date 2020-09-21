import React, { Suspense, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import Spinner from '../Spinner/Spinner';
import NotFound from '../../views/NotFound';
import routes from '../../routes';
import { getGlobalState } from '../../redux/operations/stateOperation';
import '../../css/vars.module.css';
import '../../index.module.css';

const App = ({ getGlobalState, token }) => {
  const [isTestOpen, changeStateIsOpen] = useState(false);
  useEffect(() => {
    getGlobalState();
  }, [token, getGlobalState]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {/* {token && <LeftSideBar />} */}
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <button
        onClick={() => changeStateIsOpen(prev => !prev)}
        style={{
          position: 'absolute',
          top: 0,
          width: '200px',
          height: '50px',
          fontSize: '18px',
        }}
      >
        Show Modal
      </button>
      {isTestOpen && <ModalInterview close={changeStateIsOpen} />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.access_token,
  };
};

export default connect(mapStateToProps, { getGlobalState })(App);
