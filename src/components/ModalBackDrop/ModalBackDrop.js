import React, { Component } from "react";
import style from "./ModalBackDrop.module.css";

const modalBackDrop = (WrappedComponent) => {
  return class ModalBackDrop extends Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener("keydown", this.closeModalKeydown);
      document.addEventListener("click", this.closeModalOverlay);
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalKeydown);
      document.removeEventListener("click", this.closeModalOverlay);
    }

    closeModal = async () => {
      await this.setState({ isOpen: false });
      this.props.close();
    };

    closeModalKeydown = (e) => {
      if (e.code === "Escape") {
        this.closeModal();
      } else return;
    };

    closeModalOverlay = (e) => {
      if (e.target.dataset.type === "modal") {
        this.closeModal();
      } else return;
    };

    render() {
      return (
        this.state.isOpen && (
          <div data-type="modal" className={style.overlay}>
            <WrappedComponent {...this.props} closeModal={this.closeModal} />
          </div>
        )
      );
    }
  };
};
export default modalBackDrop;
