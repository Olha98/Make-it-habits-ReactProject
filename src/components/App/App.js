import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../CustomRoutes/PrivateRoute";
import PublicRoute from "../CustomRoutes/PublicRoute";
import routes from "../../routes";
import "../../css/vars.css";
import "../../index.module.css"
import Spinner from "../Spinner/Spinner";


const App = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes.map((route) =>
          route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
            <PublicRoute key={route.label} {...route} />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default App;
