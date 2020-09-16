import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import HabitItem from '../HabitItem/HabitItem';
import style from './Habits.module.css';

import CustomScrollbars from '../../../assests/scroll/scroll';
import Modal from '../../ModalBackDrop/ModalBackDrop';

import '../../../main.css';
import HabitChoice from '../../HabitChoice/HabitChoice';

class Habits extends Component {
  state = {
    isShowModal: false,
  };

  openModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
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
              {this.props.habits.map(({ _id }, idx) => (
                <HabitItem key={_id} id={_id} idx={idx} />
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
          {this.state.isShowModal && <HabitChoice close={this.openModal} />}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state.user.habits);
  //const getNotifications =
  //const habitsArray = leftSideBarSelectors.listOfHabits(state); // [ [null, null, null], [null, null, null],[null, null, null]]
  //const numberOfHabits = habitsArray.length

  //const findNotifications = habitsArray.map((habit)=>
  //habit.data.every(elem=> elem === true )
  // for ( let i=0; i < numberOfHabits; i+=){
  //
  //}

  return {
    habits: leftSideBarSelectors.listOfHabits(state),
  };
};
export default connect(mapStateToProps)(Habits);

// const listOfHabits = [
//   {
//     createAt: "2020-09-14T06:15:57.588Z",
//     data: [false, false, false, false],

//     name: "1",
//   },
//   {
//     createAt: "2020-09-14T06:15:57.588Z",
//     data: [false, false, false, false, true],

//     name: "2",
//   },
//   {
//     createAt: "2020-09-14T06:15:57.588Z",
//     data: [false, false, false, false, true],

//     name: "3",
//   },
//   {
//     createAt: "2020-09-14T06:15:57.588Z",
//     data: [true, true, true, true, true],

//     name: "44",
//   },
//   {
//     createAt: "2020-09-14T06:15:57.588Z",
//     data: [true, true, true, true, true],

//     name: "55",
//   },
// ];

// const allNotifications = listOfHabits.filter(({ data, name }) => {
//   const isAllTrue = data.every((bool) => bool);

//   if (isAllTrue) {
//     return {
//       [name]: data.name,
//       // [name]: name,
//     };
//   }
//   return "";
// });

// const getName = allNotifications.forEach((el) => {
//   console.log("el", el.name);
// });
