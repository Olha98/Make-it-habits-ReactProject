import React, { Component } from 'react';
import style from './InnerNavigation.module.css';
import { ReactComponent as Bell } from '../../../assests/images/LeftSideBar/bell.svg';
import { ReactComponent as Win } from '../../../assests/images/LeftSideBar/win.svg';
import { ReactComponent as Calendar } from '../../../assests/images/LeftSideBar/calendar.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import leftSideBarSelectors from '../../../redux/selectors/leftSideBarSelectors';

class InnerNavigation extends Component {
  state = {
    isShowNotify: true,
  };
  changeNotify = () => {
    this.setState({
      isShowNotify: false,
    });
  };
  render() {
    return (
      <div>
        <section className={style.leftSideBar_innerNavigation}>
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
            <li className={style.leftSideBar_innerNavigation__list_item}>
              <NavLink
                onClick={() => this.changeNotify()}
                to="/notifications"
                className={style.leftSideBar_innerNavigation__list_item_link}
                activeClassName={
                  style.leftSideBar_innerNavigation__list_item_link_active
                }
              >
                <div className={style.leftSideBar_innerNavigation__green}>
                  <Bell />
                </div>
              </NavLink>
              <div
                className={
                  style.leftSideBar_innerNavigation__list_item_link_notify
                }
              >
                {this.props.number && <span>{this.props.number}</span>}
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const listOfHabits = leftSideBarSelectors.listOfHabits(state);
  const allNotifications = listOfHabits.filter(({ data, name }) => {
    const isAllTrue = data.every(bool => bool);

    if (isAllTrue) {
      return {
        [name]: data.name,
      };
    }
    return '';
  });

  const getName = allNotifications.forEach(el => {});
  return {
    number: allNotifications.length,
    names: getName,
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps)(InnerNavigation);
