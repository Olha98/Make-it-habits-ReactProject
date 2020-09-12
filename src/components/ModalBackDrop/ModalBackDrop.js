import React, { Component, createRef } from "react";
import style from "./ModalBackDrop.module.css";

const modalBackDrop = (WrappedComponent) => {
  return class ModalBackDrop extends Component {
    // openModal = () => {
    //   this.setState({ isOpen: true });
    // };

    // state = {
    //   isOpen: true,
    //   // showModal: this.openModal,
    // };

    overlayRef = createRef();

    componentDidMount() {
      window.addEventListener("keydown", this.closeModalKeydown);
      this.overlayRef.current.addEventListener("click", this.closeModalOverlay);
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalKeydown);
      this.overlayRef.current.removeEventListener(
        "click",
        this.closeModalOverlay
      );
    }

    closeModal = () => this.setState({ isOpen: false });

    closeModalKeydown = (e) => {
      if (e.code === "Escape") {
        this.closeModal();
      }
    };

    closeModalOverlay = (e) => {
      if (this.overlayRef.current === e.target) {
        this.closeModal();
      }
    };

    render() {
      // console.log(this.props);
      return (
        // this.state.isOpen && (
        <div ref={this.overlayRef} data-modal="modal" className={style.overlay}>
          <WrappedComponent {...this.props} extraProp="This prop is from HOC" />
          <button
            data-modalbtn="modalbtn"
            className={style.button}
            onClick={this.closeModal}
          >
            X
          </button>
        </div>
        // )
      );
    }
  };
};

export default modalBackDrop;
