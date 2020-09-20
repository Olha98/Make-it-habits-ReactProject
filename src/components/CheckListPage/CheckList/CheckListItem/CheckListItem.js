import React, { Component } from 'react';
import style from './CheckListItem.module.css';
// import Modal from '../../../ModalBackDrop/ModalBackDrop';
import CastomHabit from '../../../CustomHabit/CastomHabit';
import { ReactComponent as ButtonOk } from '../../../../assests/images/CheckListPage/button_ok.svg';
import { ReactComponent as ButtonDelete } from '../../../../assests/images/CheckListPage/button_delete.svg';
import { ReactComponent as ButtonEdit } from '../../../../assests/images/CheckListPage/button_edit.svg';
import addHabitStatus from '../../../../redux/operations/chekListOperation';

import {
  main_violet,
  main_pink,
  main_yellow,
  main_blue,
} from '../../../../css/vars.module.css';
import { connect } from 'react-redux';

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
    isShowModal: false,
    fromCheckList: true,
    colors: [
      main_violet,
      main_pink,
      main_yellow,
      main_blue,
      'deepskyblue',
      'lightcoral',
      'green',
      'darkorange',
      'lightseagreen',
      'violet',
    ],
  };

  // showFullInfo(e) {
  //   if (e.target.closest('[data-element="button"]')) {
  //     this.setState(prevState => ({
  //       showFullInfo: !prevState.showFullInfo,
  //     }));
  //   }
  // }

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
    this.setState({
      showFullInfo: true,
    });
    // if (bool) {
    //   // console.log('bool', bool);
    //   // this.setState({
    //   //   showFullInfo: true,
    //   // });
    // }
    // else
    // this.setState({
    //   showFullInfo: false,
    // });
    const id = this.props.habit._id;
    const status = bool;

    const updateInfo = { id, status };

    // const array = [...this.props.habit.data];
    // const array = [null, null, null];
    // const newArray = array.map(elem => {
    //   console.log('elem', elem);
    // });
    // console.log('array', array);
    // console.log('newArray', newArray);

    //  const newArray;
    // return;

    this.props.addStatus(updateInfo);
  };

  // getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);

  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  getRandomIntInclusive(max) {
    max = Math.floor(max);

    return Math.floor(Math.random() * max);
  }

  render() {
    // console.log('this.stateLISTITEM', this.state);
    // console.log('this.props.ITEM', this.props.habit._id);
    const { name, efficiency } = this.props.habit;
    const { colors, isShowModal } = this.state;
    const color = colors[this.getRandomIntInclusive(colors.length)];

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
              <p className={style.fulfiledDays}>5</p>
            </li>
            <li>
              <p className={style.progressDaysTitle}>К-во пропущенных дней</p>
              <p className={style.missedDays}>2</p>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStatus: updateInfo => dispatch(addHabitStatus(updateInfo)),
  };
};

export default connect(null, mapDispatchToProps)(CheckListItem);
