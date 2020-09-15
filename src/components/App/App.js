import React, { useState, Suspense } from "react";
// import Modal from "../ModalBackDrop/ModalBackDrop";
import { Switch } from "react-router-dom";
import PrivateRoute from "../CustomRoutes/PrivateRoute";
import PublicRoute from "../CustomRoutes/PublicRoute";
import routes from "../../routes";
import "../../css/vars.module.css";
import "../../index.module.css";
import Spinner from "../Spinner/Spinner";
import Test from "../ModalBackDrop/Test";
// import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

const App = () => {
  const [isTestOpen, changeStateIsOpen] = useState(false);
  return (
    <>
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

      <button onClick={() => changeStateIsOpen((prev) => !prev)}>
        OpenModal
      </button>
      {isTestOpen && <Test close={changeStateIsOpen} />}
    </>
  );
};

export default App;
