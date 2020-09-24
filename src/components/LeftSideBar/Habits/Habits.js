import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import HabitItem from '../HabitItem/HabitItem';
import style from './Habits.module.css';

import CustomScrollbars from '../../../assests/scroll/scroll';

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
    const { habits } = this.props;

    return (
      <>
        <div className={style.leftSideBar_habits}>
          {this.props.habits.length > 0 ? (
            <h3 className={style.leftSideBar_habits_title}>Привычки</h3>
          ) : (
            <div
              className={style.leftSideBar_habits_title_qoute_wrapper_position}
            >
              <div className={style.leftSideBar_habits_title_qoute_wrapper}>
                <blockquote className={style.leftSideBar_habits_title_qoute}>
                  ―Побороть дурные привычки легче сегодня, чем завтра.
                </blockquote>
                <p>~ Конфуций</p>
              </div>
            </div>
          )}
          {this.props.habits.length > 0 && (
            <CustomScrollbars
              style={{
                width: 270,
                // height: 202,
                height: 360,
              }}
            >
              {habits && (
                <ul className={style.leftSideBar_habits__list}>
                  {habits.map(({ _id }, idx) => (
                    <HabitItem key={_id} id={_id} idx={idx} />
                  ))}
                </ul>
              )}
            </CustomScrollbars>
          )}

          <button
            type="button"
            onClick={this.openModal}
            className={style.leftSideBar_habits__button}
          >
            Добавить привычку +
          </button>

          {this.state.isShowModal && <HabitChoice close={this.openModal} />}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: leftSideBarSelectors.listOfHabits(state),
  };
};
export default connect(mapStateToProps)(Habits);
