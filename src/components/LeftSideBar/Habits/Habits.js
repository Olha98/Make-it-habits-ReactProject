import React, { Component } from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import HabitItem from "../HabitItem/HabitItem";
import style from "./Habits.module.css";

import CustomScrollbars from "../../../assests/scroll/scroll";
import Modal from "../../ModalBackDrop/ModalBackDrop";

import "../../../main.css";

class Habits extends Component {
  state = {
    isShowModal: false,
  };

  openModal = () => {
    this.setState({
      isShowModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  render() {
    return (
      <>
        <section className={style.leftSideBar_habits}>
          <h3 className={style.leftSideBar_habits_title}>Привычки</h3>
          <CustomScrollbars
            style={{
              width: 270,
              height: 186,
            }}
          >
            <ul className={style.leftSideBar_habits__list}>
              {this.props.habits.map(({ id }, idx) => (
                <HabitItem key={id} id={id} idx={idx} />
              ))}
            </ul>
          </CustomScrollbars>
          <button
            type="button"
            onClick={this.openModal}
            className={style.leftSideBar_habits__button}
          >
            Добавить привычку +
          </button>
          {this.state.isShowModal && (
            <Modal closeModal={this.closeModal}>
              <h2>Hello, Kostya!</h2>
            </Modal>
          )}
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  habits: leftSideBarSelectors.listOfHabits(state),
});
export default connect(mapStateToProps)(Habits);
