import React, { Component } from "react";
import style from "./CheckListItem.module.css";
import { ReactComponent as ButtonOk } from "../../../../assests/images/CheckListPage/button_ok.svg";
import { ReactComponent as ButtonDelete } from "../../../../assests/images/CheckListPage/button_delete.svg";
import { ReactComponent as ButtonEdit } from "../../../../assests/images/CheckListPage/button_edit.svg";

class CheckListItem extends Component {
  state = {
    showFullInfo: false,
  };

  showFullInfo() {
    this.setState((prevState) => ({
      showFullInfo: !prevState.showFullInfo,
    }));
  }

  render() {
    const { name, efficiency } = this.props;

    return (
      <div
        style={{ borderLeft: "8px solid #655de6" }}
        className={style.checkListItem}
        onClick={() => this.showFullInfo()}
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
              className={[
                style.checkListButton,
                style.checkListButtonSubmit,
              ].join(" ")}
              type="button"
            >
              <ButtonOk />
            </button>
            <button
              className={[
                style.checkListButton,
                style.checkListButtonDelete,
              ].join(" ")}
              type="button"
            >
              <ButtonDelete />
            </button>
            <button className={style.checkListButtonEdit} type="button">
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
