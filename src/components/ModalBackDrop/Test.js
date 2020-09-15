import React from "react";
import modalBackDrop from "./ModalBackDrop";
import style from "./Test.module.css";

const ModalTest = () => {
  return (
    <div className={style.modalTest}>
      <p>modal</p>
    </div>
  );
};

export default modalBackDrop(ModalTest);
