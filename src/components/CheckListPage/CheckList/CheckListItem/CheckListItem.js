import React, { Component } from "react";
import style from "./CheckListItem.module.css";
import { ReactComponent as ButtonOk } from "../../../../assests/images/CheckListPage/button_ok.svg";
import { ReactComponent as ButtonDelete } from "../../../../assests/images/CheckListPage/button_delete.svg";
import { ReactComponent as ButtonEdit } from "../../../../assests/images/CheckListPage/button_edit.svg";

import {
  main_violet,
  main_pink,
  main_yellow,
  main_blue,
} from "../../../../css/vars.module.css";

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
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
      "olive",
    ],
  };

  showFullInfo(e) {
    // console.log("e.target.nodeName", e.target.nodeName);
    console.log("e.target.closest(data)", e.target.closest("[data-element]"));

    // if (e.target.nodeName === "BUTTON" || e.target.nodeName === "svg" || e.target.nodeName === "path") return;
    if (!e.target.closest("[data-element]")) {
      console.log("WRONG");
      return;
    }

    if (
      e.target.closest("[data-element]")
      // e.target.dataset.element === "habit"
    ) {
      console.log("OK");
      this.setState((prevState) => ({
        showFullInfo: !prevState.showFullInfo,
      }));
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { name, efficiency } = this.props;
    const colors = this.state.colors;

    return (
      <div
        data-element="habit"
        style={{
          borderLeft: `8px solid ${
            colors[this.getRandomIntInclusive(0, colors.length - 1)]
          }`,
        }}
        className={style.checkListItem}
        onClick={(e) => this.showFullInfo(e)}
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
              data-button="button"
              className={[
                style.checkListButton,
                style.checkListButtonSubmit,
              ].join(" ")}
              type="button"
            >
              <ButtonOk />
            </button>
            <button
              data-button="button"
              className={[
                style.checkListButton,
                style.checkListButtonDelete,
              ].join(" ")}
              type="button"
            >
              <ButtonDelete />
            </button>
            <button
              data-button="button"
              className={style.checkListButtonEdit}
              type="button"
            >
              <ButtonEdit />
            </button>
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
