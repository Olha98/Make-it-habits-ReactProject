import React, { Component } from 'react';
import style from './ModalBackDrop.module.css';

const modalBackDrop = WrappedComponent => {
  return class ModalBackDrop extends Component {
    // state = {
    //   isOpen: false,
    // };
    componentDidMount() {
      // this.setState({ isOpen: true });
      window.addEventListener('keydown', this.closeModalKeydown);
      document.addEventListener('click', this.closeModalOverlay);
      document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.closeModalKeydown);
      document.removeEventListener('click', this.closeModalOverlay);
      document.body.style.overflow = 'auto';
    }

    closeModal = () => {
      // await this.setState({ isOpen: false });
      this.props.close();
    };

    closeModalKeydown = e => {
      // console.log(11111111);
      if (e.code === 'Escape') {
        this.closeModal();
      }
    };

    closeModalOverlay = e => {
      if (e.target.dataset.type === 'modal') {
        this.closeModal();
      }
    };

    render() {
      return (
        // this.state.isOpen && (
        <div data-type="modal" className={style.overlay}>
          <WrappedComponent {...this.props} closeModal={this.closeModal} />
        </div>
        // )
      );
    }
  };
};
export default modalBackDrop;
