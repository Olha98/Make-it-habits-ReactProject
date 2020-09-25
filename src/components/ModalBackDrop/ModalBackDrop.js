import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import modalTransition from './modalTransition.module.css';
import style from './ModalBackDrop.module.css';

const modalBackDrop = WrappedComponent => {
  return class ModalBackDrop extends Component {
    state = {
      isOpen: false,
    };
    componentDidMount() {
      this.setState({ isOpen: true });
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
      this.props.close();
    };

    closeModalKeydown = e => {
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
        <div data-type="modal" className={style.overlay}>
          <CSSTransition
            in={this.state.isOpen}
            timeout={250}
            classNames={modalTransition}
            unmountOnExit
          >
            <WrappedComponent {...this.props} closeModal={this.closeModal} />
          </CSSTransition>
        </div>
      );
    }
  };
};
export default modalBackDrop;
