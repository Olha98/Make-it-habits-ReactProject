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
    isShowNotify: false,
    number: 0,
  };
  componentDidMount() {
    const dateInLocalStorage = localStorage.getItem('Date');
    const differInTime = Date.now() - dateInLocalStorage;
    if (differInTime < 86400) {
      // console.log('differInTime', differInTime);
      this.setState({
        isShowNotify: false,
        // number: 0,
      });
    } else {
      this.setState({
        isShowNotify: true,
        number: this.props.number,
      });
    }
    // }
    window.addEventListener('click', this.changeNotify);
  }
  changeNotify = e => {
    if (e.target.dataset.set === 'notify') {
      localStorage.setItem('isShowNotify', false);
      localStorage.setItem('number', 0);
      localStorage.setItem('Date', Date.now());
      this.setState({
        isShowNotify: false,
        number: 0,
      });
    }
  };
  componentWillUnmount() {
    window.removeEventListener('click', this.changeNotify);
  }
  render() {
    return (
      <div>
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
              {this.state.isShowNotify && this.state.number !== 0 && (
                <div
                  className={
                    style.leftSideBar_innerNavigation__list_item_link_notify
                  }
                >
                  {this.state.number && <span>{this.state.number}</span>}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const navNot = leftSideBarSelectors.allNotifications(state);
  // console.log(navNot);

  return {
    number: navNot && navNot.length,
  };
};

export default connect(mapStateToProps)(InnerNavigation);
