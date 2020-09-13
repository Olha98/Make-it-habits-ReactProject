import React, { Component } from "react";
import style from "./CastomHabit.module.css";
import { connect } from "react-redux";
import addCustomHabit from '../../redux/actions/castomHabitActions';
import addStartDate from '../../redux/actions/castomHabitActions';

class CastomHabit extends Component {
  state = {
    name: "",
    startDate: "",
    time: "",
    repeat: ""
  };

handleSubmit = e => {
  e.preventDefault();
  const { name, startDate, time, repeat } = this.state;
  this.props.onAddCustomHabit({name, startDate, time, repeat})
  this.props.closeModal()
// this.props.onAddCustomStartDate({startDate})

}


handleChenge= e => {
  const { name, value } = e.target;
  this.setState({
    [name]: value,
  });
};

  render() {
    return (
      <div className={style.castomHabitContainer}>
        <h2 className={style.castomHabitTitle}>Настройте привычку под себя</h2>
        <p className={style.castomHabitText}>так Вам будет удобнее достичь своей цели</p>
        <form onSubmit={this.handleSubmit} className={style.castomHabitForm}>
          <div className={style.castomHabitLableWrapper}>
            <label className={style.castomHabitLabel}>
              Название
              <input type="text" className={style.castomHabitName} name="name" value={this.state.name} onChange={this.handleChenge}/>
            </label>
            <label className={style.castomHabitLabel}>
              Дата старта
              <input type="date" className={style.castomHabitDate} name="startDate" value={this.state.startDate} onChange={this.handleChenge}/>
            </label>
            <label className={style.castomHabitLabel}>
              Время
              <input type="time" className={style.castomHabitTime} name="time" value={this.state.time} onChange={this.handleChenge}/>
            </label>
            <label className={style.castomHabitLabel}>
              Повторение
              <select className={style.castomHabitSelect} name="repeat" value={this.state.repeat} onChange={this.handleChenge}>
                <option selected disabled>выбрать</option>
                <option>Ежедневно</option>
                <option>Раз в 2 дня</option>
                <option>ПН, СР, ПТ</option>
                <option>ВТ, ЧТ, СБ</option>
              </select>
            </label>
          </div>

          <button className={style.castomHabitDelete}>удалить привычку</button>
          <div className={style.castomHabitBtnWrapper}>
            <button className={style.castomHabitCancelBtn}>Отмена</button>
            <button type="submit" className={style.castomHabitSaveBtn}>Сохранить</button>
          </div>
        </form>
      </div>
    );
  }
}



export default connect(null, {onAddCustomHabit: addCustomHabit, onAddCustomStartDate: addStartDate})(CastomHabit);
