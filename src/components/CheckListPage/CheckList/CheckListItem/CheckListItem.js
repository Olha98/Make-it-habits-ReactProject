import React, { Component } from "react";
import style from "./CheckListItem.module.css";
import Modal from "../../../ModalBackDrop/ModalBackDrop";
import CastomHabit from "../../../CustomHabit/CastomHabit";
import { ReactComponent as ButtonOk } from "../../../../assests/images/CheckListPage/button_ok.svg";
import { ReactComponent as ButtonDelete } from "../../../../assests/images/CheckListPage/button_delete.svg";
import { ReactComponent as ButtonEdit } from "../../../../assests/images/CheckListPage/button_edit.svg";

import { main_violet, main_pink, main_yellow, main_blue } from "../../../../css/vars.module.css";

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
    isShowModal: false,
    colors: [
      main_violet,
      main_pink,
      main_yellow,
      main_blue,
      "deepskyblue",
      "lightcoral",
      "green",
      "darkorange",
      "lightseagreen",
      "violet"
    ]
  };

  showFullInfo(e) {
    if (e.target.closest('[data-element="button"]')) {
      this.setState(prevState => ({
        showFullInfo: !prevState.showFullInfo
      }));
    }
  }

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
    console.log("this.props.ITEM", this.props);
    const { name, efficiency } = this.props.habit;
    const { colors, isShowModal } = this.state;
    const color = colors[this.getRandomIntInclusive(colors.length)];

    return (
      <div
        data-element="habit"
        style={{
          borderLeft: `8px solid ${color}`
        }}
        className={style.checkListItem}
        onClick={e => this.showFullInfo(e)}
      >
        <div className={style.checkListItemContentMainWrapper}>
          <div className={style.checkListItemContentWrapper}>
            <div className={style.checkListItemContent}>
              <label className={style.checkListItemProgressLabel}>
                <span>{name}</span>
                <progress className={style.checkListItemProgress} id="file" max="100" value={efficiency}>
                  70%
                </progress>
              </label>
              <p className={style.checkListItemProgressValue}>{efficiency}%</p>
            </div>
            <p className={style.checkListItemProgressComment}>Прогресс привития привычки</p>
          </div>
          <div className={style.checkListButtons}>
            <button
              data-element="button"
              className={[style.checkListButton, style.checkListButtonSubmit].join(" ")}
              type="button"
            >
              <ButtonOk data-element="svg" />
            </button>
            <button
              disabled
              data-element="button"
              className={[style.checkListButton, style.checkListButtonDelete].join(" ")}
              type="button"
            >
              <ButtonDelete data-element="svg" />
            </button>
            <button data-element="button_edit" className={style.checkListButtonEdit} type="button" onClick={this.openModal}>
              <ButtonEdit />
            </button>
            {isShowModal && (
              <Modal closeModal={this.closeModal}>
                <CastomHabit closeModal={this.closeModal} habit={this.props.habit} />
              </Modal>
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
          ""
        )}
      </div>
    );
  }
}

export default CheckListItem;
