import React, { Component } from 'react';
import style from './CheckListItem.module.css';
import CastomHabit from '../../../CustomHabit/CastomHabit';
import addHabitStatus from '../../../../redux/operations/chekListOperation';
import HabitFailed from '../../../habitFailed/HabitFailed';

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
import { getCurrentDate, getColor, getIndex } from './CheckListFunctions';

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
    isFailed: false,
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
      '#9ACD32',
      '#FFFF00',
      '#FF8C00',
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

  closeFailModal = () => {
    this.setState({
      isFailed: false,
    });
  };

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
        isFailed: true,
      });
    }

    const { arrayDate, day } = this.props.habit;
    const index = getIndex(day, arrayDate);
    const firstNull = this.state.daysProgress.map((elem, idx) => {
      if (idx === index) {
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
  };

  handleSubmit = () => {
    this.setState({
      isCurrentDay: this.props.habit.day,
    });
    getCurrentDate() === this.props.habit.day && this.onStatus(true);
    this.props.habit.efficiency === 100 && this.openCongratulationModal();
  };

  handleDelete = () => {
    this.setState({ isCurrentDay: this.props.habit.day });
    getCurrentDate() === this.props.habit.day && this.onStatus(false);
  };

  setClassNameSubmit = () => {
    const { day } = this.props.habit;
    const { checkedStatus } = this.state;

    return getCurrentDate() !== day
      ? style.checkListButtonSubmitDisabledNoHover
      : checkedStatus
      ? style.checkListButtonSubmitDisabledActive
      : checkedStatus === false
      ? style.checkListButtonSubmitDisabled
      : style.checkListButtonSubmit;
  };

  setClassNameDelete = () => {
    const { day } = this.props.habit;
    const { checkedStatus } = this.state;

    return getCurrentDate() !== day
      ? style.checkListButtonDeleteDisabledNoHover
      : checkedStatus === false
      ? style.checkListButtonDeleteDisabledActive
      : style.checkListButtonDelete;
  };

  render() {
    const { name, efficiency, day } = this.props.habit;
    const { index } = this.props;
    const {
      isCustomModal,
      isCongratulationsModal,
      daysDone,
      daysPassed,
      habitChecked,
      isFailed,
      color,
    } = this.state;

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

        {isFailed && (
          <HabitFailed
            close={this.closeFailModal}
            habitName={this.props.habit.name}
            fromCheckList={this.state.fromCheckList}
          />
        )}

        <div
          data-element="habit"
          style={{
            borderLeft: `8px solid ${getColor(color, index)}`,
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
                disabled={habitChecked && getCurrentDate() !== day}
                className={this.setClassNameSubmit()}
                type="button"
                onClick={this.handleSubmit}
              >
                <ButtonOk data-element="svg" />
              </button>

              <button
                disabled={habitChecked && getCurrentDate() !== day}
                className={this.setClassNameDelete()}
                type="button"
                onClick={this.handleDelete}
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
