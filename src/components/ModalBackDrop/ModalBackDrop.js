import React, { useEffect, useRef } from "react";
import styles from "./ModalBackDrop.module.css";
const Modal = ({ children, closeModal }) => {
  const refOverlay = useRef();
  const hendleKeyDown = ({ key }) => {
    if (key !== "Escape") return;
    closeModal();
  };
  const hendleClickOverlay = ({ target }) => {
    if (refOverlay.current !== target) return;
    closeModal();
  };
  useEffect(() => {
    window.addEventListener("keydown", hendleKeyDown);
    refOverlay.current.addEventListener("click", hendleClickOverlay);
    return () => {
      window.removeEventListener("keydown", hendleKeyDown);
      refOverlay.current.removeEventListener("click", hendleClickOverlay);
    };
  }, []);
  return (
    <div className={styles.overlay} ref={refOverlay}>
      {children}
    </div>
  );
};
export default Modal;
