import React, { Component } from 'react';
import style from './CheckListItem.module.css';
import CastomHabit from '../../../CustomHabit/CastomHabit';
import addHabitStatus from '../../../../redux/operations/chekListOperation';

import { ReactComponent as ButtonOk } from '../../../../assests/images/CheckListPage/button_ok.svg';
import { ReactComponent as ButtonDelete } from '../../../../assests/images/CheckListPage/button_delete.svg';
import { ReactComponent as ButtonEdit } from '../../../../assests/images/CheckListPage/button_edit.svg';
import {
  main_green,
  main_violet,
  main_pink,
  main_yellow,
  main_blue,
  green_1,
} from '../../../../css/vars.module.css';

import { connect } from 'react-redux';
import Congratulations from '../../../Congratulations/Congratulations';

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
    isCustomModal: false,
    isCongratulationsModal: false,
    fromCheckList: true,
    daysProgress: [],
    daysDone: '',
    daysPassed: '',
    habitChecked: false,
    checkedStatus: '',
    habitId: '',
    isCurrentDay: '',
    dayEfficiency: 0,
    color: [
      main_violet,
      main_pink,
      main_green,
      main_yellow,
      main_blue,
      green_1,
    ],
  };

  componentDidMount() {
    this.setState({
      daysProgress: [...this.props.habit.data],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.habit.efficiency !== this.props.habit.efficiency) {
      this.props.habit.efficiency === 100 && this.openCongratulationModal();
    }
  }

  //=========================== CurrentDate ==========================//

  //=========================== Color ==========================//

  // getRandomColor = () => {
  //   const color = Math.floor(Math.random() * 16777215).toString(16);
  //   if ((color !== '000000' || color !== 'ffffff') && color.length === 6) {
  //     return `#${color}`;
  //   } else return `${main_yellow}`;
  // };

  getColor = () => {
    const { color } = this.state;
    const { index } = this.props;

    let newColor;

    if (index < color.length) {
      newColor = color[index];
    }
    if (index >= color.length) {
      newColor = color[index - color.length];
    }
    return newColor;
  };

  //=========================== Modal ==========================//

  openModal = () => {
    this.setState({
      isCustomModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isCustomModal: false,
    });
  };

  openCongratulationModal = () => {
    this.setState({
      isCongratulationsModal: true,
    });
  };

  closeCongratulationModal = () => {
    this.setState({
      isCongratulationsModal: false,
    });
  };

  //=========================== OnClick ==========================//

  onStatus = bool => {
    this.setState(prev => ({
      showFullInfo: !prev.showFullInfo,
      habitId: this.props.habit._id,
      habitChecked: true,
    }));

    if (bool) {
      this.setState({
        checkedStatus: true,
      });
    } else {
      this.setState({
        checkedStatus: false,
      });
    }

    const { arrayDate, day } = this.props.habit;

    const date = new Date();
    const currentMonth =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const currentDay = `${date.getDate()}.${currentMonth}.${date.getFullYear()}`;
    // const currentDay = `24.09.2020`;

    if (currentDay === day && arrayDate.includes(currentDay)) {
      const index = arrayDate.reduce((acc, date, idx) => {
        if (date === currentDay) {
          acc = idx;
        }
        return acc;
      }, '');

      // let isFirst = true;

      const firstNull = this.state.daysProgress.map((elem, idx) => {
        if (idx === index) {
          // isFirst = false;
          return bool;
        }
        return elem;
      });

      this.setState({
        daysDone: firstNull.filter(elem => elem === true).length,
        daysPassed: firstNull.filter(elem => elem === false).length,
      });

      const updateInfo = { id: this.props.habit._id, data: [...firstNull] };
      this.props.addStatus(updateInfo);
    }
  };

  render() {
    const { name, efficiency, day } = this.props.habit;
    const {
      isCustomModal,
      isCongratulationsModal,
      daysDone,
      daysPassed,
      habitChecked,
      checkedStatus,
    } = this.state;
    // const color = this.getRandomColor();

    const date = new Date();
    const currentMonth =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const currentDay = `${date.getDate()}.${currentMonth}.${date.getFullYear()}`;

    return (
      <>
        {isCustomModal && (
          <CastomHabit
            close={this.closeModal}
            habit={this.props.habit}
            fromCheckList={this.state.fromCheckList}
          />
        )}

        {isCongratulationsModal && (
          <Congratulations
            close={this.closeCongratulationModal}
            habitName={this.props.habit.name}
            fromCheckList={this.state.fromCheckList}
          />
        )}

        <div
          data-element="habit"
          style={{
            borderLeft: `8px solid ${this.getColor()}`,
          }}
          className={style.checkListItem}
        >
          <div className={style.checkListItemContentMainWrapper}>
            <div className={style.checkListItemContentWrapper}>
              <div className={style.checkListItemContent}>
                <label className={style.checkListItemProgressLabel}>
                  <span>{name}</span>
                  <progress
                    className={style.checkListItemProgress}
                    id="file"
                    max="100"
                    value={efficiency}
                  >
                    70%
                  </progress>
                </label>
                <p className={style.checkListItemProgressValue}>
                  {efficiency}%
                </p>
              </div>
              <p className={style.checkListItemProgressComment}>
                Прогресс привития привычки
              </p>
            </div>
            <div className={style.checkListButtons}>
              <button
                // disabled={habitChecked}
                disabled={habitChecked && currentDay !== day}
                // data-element="button"
                // data-status="true"
                className={
                  currentDay !== day
                    ? style.checkListButtonSubmitDisabledNoHover
                    : checkedStatus
                    ? style.checkListButtonSubmitDisabledActive
                    : checkedStatus === false
                    ? style.checkListButtonSubmitDisabled
                    : style.checkListButtonSubmit
                }
                type="button"
                // onClick={() => currentDay === day && this.onStatus(true, day)}
                onClick={() => {
                  this.setState({
                    isCurrentDay: day,
                    // dayEfficiency: this.props.habit.efficiency,
                  });
                  currentDay === day && this.onStatus(true);

                  console.log('object', this.props.habit.efficiency);
                  this.props.habit.efficiency === 100 &&
                    console.log('hellocherpoberi');
                  // this.openCongratulationModal();
                }}
              >
                <ButtonOk data-element="svg" />
              </button>

              <button
                // disabled={habitChecked && checkedStatus}
                disabled={habitChecked && currentDay !== day}
                // data-element="button"
                // data-status="false"

                className={
                  currentDay !== day
                    ? style.checkListButtonDeleteDisabledNoHover
                    : checkedStatus === false
                    ? style.checkListButtonDeleteDisabledActive
                    : style.checkListButtonDelete
                }
                type="button"
                onClick={() => {
                  this.setState({ isCurrentDay: day });
                  currentDay === day && this.onStatus(false);
                }}
              >
                <ButtonDelete data-element="svg" />
              </button>
              <button
                data-element="button_edit"
                className={style.checkListButtonEdit}
                type="button"
                onClick={this.openModal}
              >
                <ButtonEdit />
              </button>
            </div>
          </div>
          {this.state.showFullInfo ? (
            <ul className={style.progressDaysContentList}>
              <li className={style.progressDaysContentItem}>
                <p className={style.progressDaysTitle}>К-во выполненных дней</p>
                <p className={style.fulfiledDays}>{daysDone}</p>
              </li>
              <li>
                <p className={style.progressDaysTitle}>К-во пропущенных дней</p>
                <p className={style.missedDays}>{daysPassed}</p>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    currentHabits: state.habits.currentHabits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStatus: updateInfo => dispatch(addHabitStatus(updateInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckListItem);
