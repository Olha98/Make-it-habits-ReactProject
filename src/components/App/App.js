import React from "react";
// import { withRouter } from "react-router-dom";
// import React, { Suspense } from "react";

// import { Switch } from "react-router-dom";
// import PrivateRoute from "../CustomRoutes/PrivateRoute";
// import PublicRoute from "../CustomRoutes/PublicRoute";
// import routes from "../../routes";
import "../../css/vars.css";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import Test from "../ModalBackDrop/Test";

const App = (props) => {
  console.log(props, "app");
  return (
    <>
      <button onClick={() => modalBackDrop(true)} type="button">
        xxxxxxxxx
      </button>
      {/* <Header></Header> */}
      <Test props={props} />
      {/* <Suspense fallback={null}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            )
          )}
        </Switch>
      </Suspense> */}
    </>
  );
};

export default modalBackDrop(App);
