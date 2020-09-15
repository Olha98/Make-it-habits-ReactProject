import React, { Component } from "react";
import { connect } from "react-redux";
import leftSideBarSelectors from "../../../redux/selectors/leftSideBarSelectors";
import HabitItem from "../HabitItem/HabitItem";
import style from "./Habits.module.css";

import CustomScrollbars from "../../../assests/scroll/scroll";
import Modal from "../../ModalBackDrop/ModalBackDrop";

import "../../../main.css";
import HabitChoice from "../../HabitChoice/HabitChoice";

class Habits extends Component {
  state = {
    isShowModal: false
  };

  openModal = () => {
    this.setState({
      isShowModal: true
    });
  };

  closeModal = () => {
    this.setState({
      isShowModal: false
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
              height: 186
            }}
          >
            <ul className={style.leftSideBar_habits__list}>
              {this.props.habits.map(({ _id }, idx) => (
                <HabitItem key={_id} idx={idx} />
              ))}
            </ul>
          </CustomScrollbars>
          <button type="button" onClick={this.openModal} className={style.leftSideBar_habits__button}>
            Добавить привычку +
          </button>
          {this.state.isShowModal && (
            <Modal closeModal={this.closeModal}>
              <HabitChoice closeModal={this.closeModal} />
            </Modal>
          )}
        </section>
      </>
    );
  }
}
const mapStateToProps = state => ({
  habits: leftSideBarSelectors.listOfHabits(state)
});
export default connect(mapStateToProps)(Habits);
