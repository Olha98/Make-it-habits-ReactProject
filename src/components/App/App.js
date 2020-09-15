import React, { useState, Suspense } from "react";
import Congratulations from "../Congratulations/Congratulations";
import Modal from "../ModalBackDrop/ModalBackDrop";
import { Switch } from "react-router-dom";
import PrivateRoute from "../CustomRoutes/PrivateRoute";
import PublicRoute from "../CustomRoutes/PublicRoute";
import routes from "../../routes";
import "../../css/vars.module.css";
import "../../index.module.css";
import Spinner from "../Spinner/Spinner";
import HabitTemplate from "../HabitTemplate/HabitTemplate";

const App = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
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
      <div>
        <button onClick={showModal}>Show Modal</button>
        {isShowModal && (
          <Modal closeModal={closeModal}>
            <HabitTemplate closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
