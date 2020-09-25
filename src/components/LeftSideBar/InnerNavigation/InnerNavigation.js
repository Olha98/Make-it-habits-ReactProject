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
    number: this.props.number,
    today: 0,
  };

  componentDidMount() {
    const date = new Date();
    const dayToday = date.getDate();
    // if (
    localStorage.getItem('date') &&
      dayToday !== localStorage.getItem('date') &&
      // ) {
      this.setState({
        isShowNotify: true,
        number: this.props.number,
        today: 0,
      });
    // } else {
    //   this.setState({
    //     isShowNotify: false,
    //     number: 0,
    //     today: dayToday,
    //   });
    // }
    window.addEventListener('click', this.changeNotify);
  }
  changeNotify = e => {
    const date = new Date();
    const dayToday = date.getDate();

    if (e.target.dataset.set === 'notify') {
      this.setState({
        isShowNotify: false,
        number: 0,
        today: dayToday,
      });
      localStorage.setItem('date', dayToday);
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
              {this.state.isShowNotify && this.props.number > 0 && (
                <div
                  className={
                    style.leftSideBar_innerNavigation__list_item_link_notify
                  }
                >
                  <span>{this.props.number}</span>
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
  const navNot = leftSideBarSelectors.allNotifications(state);

  return {
    number: navNot && navNot.length,
  };
};

export default connect(mapStateToProps)(InnerNavigation);
//
