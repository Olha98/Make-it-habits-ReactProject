import React, { Component } from 'react';
import style from './CastomHabit.module.css';
import { connect } from 'react-redux';
import castomHabitActions from '../../redux/actions/castomHabitActions';
import castomHabitOperation from '../../redux/operations/castomHabitOperation';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import { ReactComponent as Trash } from '../../assests/images/Card/trash.svg';

class CastomHabit extends Component {
  state = {
    name: '',
    date: '',
    iteration: '',
    time: '',
    isSubmit: false,
  };

  componentDidMount() {
    if (this.props.chosenHabit) {
      this.setState({ name: this.props.chosenHabit });
    }
    if (this.props.fromCheckList) {
      this.setState({ name: this.props.habit.name });
    }
    if (this.props.habitNameFromCong) {
      this.setState({ name: this.props.habitNameFromCong });
    }
    if (this.props.habitNameFromCong) {
      this.setState({ name: this.props.habitNameFromCong });
    }
  }

  onClickSubmit = e => {
    e.preventDefault();
    const { name, date, time, iteration } = this.state;
    const planningTime = `${date}:${time}`;
    let id = '';
    if (this.props.habit) {
      id = this.props.habit._id;
    }
    if (e.target.dataset.save && this.props.fromCheckList) {
      this.props.requestPatchCustomHabit({ name, id });
      this.props.closeModal();
    } else if (e.target.dataset.cancel) {
      this.props.closeModal();
    } else if (e.target.dataset.delete) {
      this.props.requestRemoveCastomHabit(this.props.habit._id);
      this.props.closeModal();
    } else if (e.target.dataset.save && name, date, time, iteration) {
      this.props.requestAddCustomHabit({ name, planningTime, iteration });
      this.props.closeModal();
    } else if (e.target.dataset.save && !name, !date, !time, !iteration) {
      this.setState({ isSubmit: true })
    } 
  };

  handleChenge = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  editNumber = number => {
    if (number < 10) {
      return `0${number}`;
    } else return number;
  };

  render() {
    const date = new Date(this.props.habit?.planningTime);
    const day = this.editNumber(date.getDate());
    const month = this.editNumber(date.getMonth());
    const year = date.getFullYear();
    const hour = this.editNumber(date.getHours());
    const minute = this.editNumber(date.getMinutes());
    const planningDate = `${year}-${month}-${day}`;
    const planningHours = `${hour}:${minute}`;

    const dateToday = new Date();
    const dayToday = this.editNumber(dateToday.getDate());
    const monthToday = this.editNumber(dateToday.getMonth() + 1);
    const yearToday = dateToday.getFullYear();

    const planningDateToday = `${yearToday}-${monthToday}-${dayToday}`;

    return (
      <div className={style.castomHabitContainer}>
        <h2 className={style.castomHabitTitle}>Настройте привычку под себя</h2>
        <p className={style.castomHabitText}>
          так Вам будет удобнее достичь своей цели
        </p>
        <form onSubmit={this.handleSubmit} className={style.castomHabitForm}>
          <div className={style.castomHabitLableWrapper}>
            <label className={style.castomHabitLabel}>
              Название*
              <input
                type="text"
                className={style.castomHabitName}
                name="name"
                value={this.state.name}
                onChange={this.handleChenge}
              />
              {!this.state.name && this.state.isSubmit && (
                <span className={style.errorMassege}>
                  обязательное поле для заполнения
                </span>
              )}
            </label>
            <label className={style.castomHabitLabel}>
              Дата старта*
              <input
                type="date"
                className={style.castomHabitDate}
                name="date"
                value={this.props.fromCheckList && planningDate}
                min={planningDateToday}
                onChange={this.handleChenge}
              />
              {!this.state.date && this.state.isSubmit && (
                <span className={style.errorMassege}>
                  обязательное поле для заполнения
                </span>
              )}
            </label>
            <label className={style.castomHabitLabel}>
              Время*
              <input
                type="time"
                className={style.castomHabitTime}
                name="time"
                value={this.props.fromCheckList && planningHours}
                onChange={this.handleChenge}
              />
              {!this.state.time && this.state.isSubmit && (
                <span className={style.errorMassege}>
                  обязательное поле для заполнения
                </span>
              )}
            </label>
            <label className={style.castomHabitLabel}>
              Повторение*
              <select
                className={style.castomHabitSelect}
                name="iteration"
                value={this.props.fromCheckList && this.props.habit.iteration}
                onChange={this.handleChenge}
              >
                <option value="none">Выбрать</option>
                <option value="everyday">Ежедневно</option>
                <option value="onceInTwoDays">Раз в 2 дня</option>
                <option value="MonWedFri">ПН, СР, ПТ</option>
                <option value="TueThuSat">ВТ, ЧТ, СБ</option>
              </select>
              {!this.state.iteration && this.state.isSubmit && (
                <span className={style.errorMassege}>
                  обязательное поле для заполнения
                </span>
              )}
            </label>
          </div>
          {this.props.fromCheckList && (
            <div className={style.btnWrapper}>              
              <button
                onClick={this.onClickSubmit}
                data-delete="delete"
                className={style.castomHabitDelete}
              >
                <Trash className={style.imgTrashCan}/>
                удалить привычку
              </button>
            </div>
          )}
          <div className={style.castomHabitBtnWrapper}>
            <button
              type="submit"
              onClick={this.onClickSubmit}
              data-cancel="cancel"
              className={style.castomHabitCancelBtn}
            >
              Отмена
            </button>
            <button
              type="submit"
              onClick={this.onClickSubmit}
              data-save="save"
              className={style.castomHabitSaveBtn}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default modalBackDrop(
  connect(null, {
    onAddCustomHabit: castomHabitActions.addCustomHabit,
    removeCastomHabit: castomHabitActions.removeCustomHabit,
    requestAddCustomHabit: castomHabitOperation.addHabitOperation,
    requestRemoveCastomHabit: castomHabitOperation.removeHabitOperation,
    requestPatchCustomHabit: castomHabitOperation.patchHabitOperation,
  })(CastomHabit),
);
