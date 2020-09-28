import React, { Component } from 'react';
import style from './InnerNavigation.module.css';
import { ReactComponent as Bell } from '../../../assests/images/LeftSideBar/bell.svg';
import { ReactComponent as Win } from '../../../assests/images/LeftSideBar/win.svg';
import { ReactComponent as Calendar } from '../../../assests/images/LeftSideBar/calendar.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';
import notifyActions from '../../../redux/actions/notifyActions';
class InnerNavigation extends Component {
  state = {
    isShowNotify: true,
    number: this.props.allHabitsDone.length,
    today: 0,
  };

  componentDidMount() {
    this.props.addDoneAllHabits(this.props.allHabitsDone);
    window.addEventListener('click', this.changeNotify);
  }
  componentDidUpdate(prevProps) {
    const date = new Date();
    const dayToday = date.getDate();
    if (prevProps.allHabitsDone !== this.props.allHabitsDone) {
      this.props.addDoneAllHabits(this.props.allHabitsDone);
      this.setState({
        isShowNotify: true,
        number: this.props.allHabitsDone.length,
        today: 0,
      });
    }
    if (
      prevProps.allHabitsDone === this.props.allHabitsDone &&
      localStorage.getItem('date') &&
      dayToday === localStorage.getItem('date') &&
      localStorage.getItem('doneHabits') &&
      localStorage.getItem('doneHabits') === 0
    ) {
      this.setState({
        isShowNotify: false,
        number: 0,
        today: dayToday,
      });
    }
  }
  // }
  // }
  changeNotify = e => {
    const date = new Date();
    const dayToday = date.getDate();

    if (e.target.dataset.set === 'notify') {
      this.props.clearDoneHabitList();
      this.setState({
        isShowNotify: false,
        number: 0,
        // today: dayToday,
      });
      localStorage.setItem('date', dayToday);
      localStorage.setItem('doneHabits', 0);
    }
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.changeNotify);
  }
  render() {
    return (
      <nav>
        <div className={style.leftSideBar_innerNavigation}>
          <ul className={style.leftSideBar_innerNavigation__list}>
            <li className={style.leftSideBar_innerNavigation__list_item}>
              <NavLink
                to="/checklist"
                className={style.leftSideBar_innerNavigation__list_item_link}
                activeClassName={
                  style.leftSideBar_innerNavigation__list_item_link_active
                }
              >
                <div className={style.leftSideBar_innerNavigation__green}>
                  <Calendar />
                </div>
              </NavLink>
            </li>
            <li className={style.leftSideBar_innerNavigation__list_item}>
              <NavLink
                to="/achievements"
                className={style.leftSideBar_innerNavigation__list_item_link}
                activeClassName={
                  style.leftSideBar_innerNavigation__list_item_link_active
                }
              >
                <div className={style.leftSideBar_innerNavigation__green}>
                  <Win />
                </div>
              </NavLink>
            </li>
            <li
              data-set="notify"
              onClick={this.changeNotify}
              className={style.leftSideBar_innerNavigation__list_item}
            >
              <NavLink
                data-set="notify"
                to="/notifications"
                className={style.leftSideBar_innerNavigation__list_item_link}
                activeClassName={
                  style.leftSideBar_innerNavigation__list_item_link_active
                }
              >
                <div
                  data-set="notify"
                  className={style.leftSideBar_innerNavigation__green}
                >
                  <Bell data-set="notify" />
                </div>
              </NavLink>
              {this.state.number > 0 && (
                <div
                  className={
                    style.leftSideBar_innerNavigation__list_item_link_notify
                  }
                >
                  <span>{this.state.number}</span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const allHabitsDone = leftSideBarSelectors.allNotifications(state);

  return {
    // number: allHabitsDone && allHabitsDone.length,
    number: allHabitsDone.length,
    allHabitsDone,
  };
};
const mapDispatchToProps = dispatch => ({
  addDoneAllHabits: array => dispatch(notifyActions.addDoneHabits(array)),
  clearDoneHabitList: () => dispatch(notifyActions.clearDoneHabits()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InnerNavigation);
//
