import React from "react";
import Loader from "react-loader-spinner";
import style from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={style.wrapper}>
      <Loader type="ThreeDots" color="#43d190" height={50} width={50} />
    </div>
  );
}

export default Spinner;
