import React, { Component } from 'react';
import style from './CheckListItem.module.css';
// import Modal from '../../../ModalBackDrop/ModalBackDrop';
import CastomHabit from '../../../CustomHabit/CastomHabit';
import { ReactComponent as ButtonOk } from '../../../../assests/images/CheckListPage/button_ok.svg';
import { ReactComponent as ButtonDelete } from '../../../../assests/images/CheckListPage/button_delete.svg';
import { ReactComponent as ButtonEdit } from '../../../../assests/images/CheckListPage/button_edit.svg';
import addHabitStatus from '../../../../redux/operations/chekListOperation';

import { main_yellow } from '../../../../css/vars.module.css';
import { connect } from 'react-redux';

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
    isShowModal: false,
    fromCheckList: true,
    daysProgress: [],
    daysDone: '',
    daysPassed: '',
    habitId: '',
  };

  // showFullInfo(e) {
  //   if (e.target.closest('[data-element="button"]')) {
  //     this.setState(prevState => ({
  //       showFullInfo: !prevState.showFullInfo,
  //     }));
  //   }
  // }

  componentDidUpdate() {
    console.log('this.propsCDM', this.props);
    // this.setState({
    //   daysProgress: [...this.props.habit.data],
    //   habitId: this.props.habit._id,
    // });
  }

  getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    if ((color !== '000000' || color !== 'ffffff') && color.length === 6) {
      return `#${color}`;
    } else return `${main_yellow}`;
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

  onStatus = bool => {
    // this.setState({
    //   showFullInfo: true,
    // });
    this.setState(prev => ({ showFullInfo: !prev.showFullInfo }));

    // if (bool) {
    //   console.log('bool', bool);
    //   this.setState(prev => ({ showFullInfo: !prev.showFullInfo }));
    // }
    // else
    //   this.setState({
    //     showFullInfo: false,
    //   });

    // const statusHabit = this.props.stateHabits.find(habit => {
    //   habit._id === id;
    // });

    let isFirst = true;

    const firstNull = this.state.daysProgress.map(elem => {
      if (elem === null && isFirst) {
        isFirst = false;
        return bool;
      }
      return elem;
    });

    this.setState({
      daysDone: firstNull.filter(elem => elem === true).length,
      daysPassed: firstNull.filter(elem => elem === false).length,
      daysProgress: [...this.props.habit.data],
      // habitId: this.props.habit._id,
    });

    const updateInfo = { id: this.props.habit._id, data: [...firstNull] };
    console.log('updateInfo', updateInfo);
    this.props.addStatus(updateInfo);
  };

  render() {
    const { name, efficiency } = this.props.habit;
    const { isShowModal, daysDone, daysPassed } = this.state;
    const color = this.getRandomColor();

    return (
      <div
        data-element="habit"
        style={{
          borderLeft: `8px solid ${color}`,
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
              <p className={style.checkListItemProgressValue}>{efficiency}%</p>
            </div>
            <p className={style.checkListItemProgressComment}>
              Прогресс привития привычки
            </p>
          </div>
          <div className={style.checkListButtons}>
            <button
              // data-element="button"
              // data-status="true"
              className={[
                style.checkListButton,
                style.checkListButtonSubmit,
              ].join(' ')}
              type="button"
              onClick={() => this.onStatus(true)}
            >
              <ButtonOk data-element="svg" />
            </button>
            <button
              // disabled
              // data-element="button"
              // data-status="false"
              className={[
                style.checkListButton,
                style.checkListButtonDelete,
              ].join(' ')}
              type="button"
              onClick={() => this.onStatus(false)}
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
            {isShowModal && (
              <CastomHabit
                close={this.closeModal}
                habit={this.props.habit}
                fromCheckList={this.state.fromCheckList}
              />
            )}
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
    );
  }
}

// const mapStateToProps = state => {
//   // console.log('state', state);
//   return {
//     stateHabits: state.habits.allHabits,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addStatus: updateInfo => dispatch(addHabitStatus(updateInfo)),
  };
};

export default connect(null, mapDispatchToProps)(CheckListItem);
