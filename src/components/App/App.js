import React from "react";
// import { Switch } from "react-router-dom";
// import PrivateRoute from "../CustomRoutes/PrivateRoute";
// import PublicRoute from "../CustomRoutes/PublicRoute";
// import routes from "../../routes"
import "../../css/vars.css";
import DayliResult from "../DailyHabit/DayliResult";

const App = () => {
  return (
    <DayliResult />
    // <Suspense fallback={null}>
    //   <Switch>
    //     {routes.map((route) =>
    //       route.private ? (
    //         <PrivateRoute key={route.label} {...route} />
    //       ) : (
    //         <PublicRoute key={route.label} {...route} />
    //       )
    //     )}
    //   </Switch>
    // </Suspense>
  );
};

export default App;
