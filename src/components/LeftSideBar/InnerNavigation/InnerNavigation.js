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
    number: 0,
  };
  componentDidMount() {
    this.setState({
      isShowNotify: true,
      number: this.props.number,
    });
  }
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
            <li
              onClick={this.changeNotify}
              className={style.leftSideBar_innerNavigation__list_item}
            >
              <NavLink
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
              {/* {this.state.isShowNotify && ( */}
              <div
                className={
                  style.leftSideBar_innerNavigation__list_item_link_notify
                }
              >
                {this.props.number && <span>{this.props.number}</span>}
              </div>
              {/* )} */}
            </li>
          </ul>
        </section>
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
