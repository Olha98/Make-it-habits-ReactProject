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
    // this.setState({
    //   // isShowNotify: false,
    //   number: this.props.number,
    // });
    window.addEventListener('click', this.changeNotify);
  }
  changeNotify = e => {
    console.log('e.target', e.target);
    if (e.target.dataset.set === 'notify') {
      const { isShowNotify, number } = this.state;

      // this.setState({
      //   isShowNotify: false,
      //   number: this.props.number,
      // });
      localStorage.setItem('isShowNotify', isShowNotify);
      localStorage.setItem('number', number);
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
              {this.state.isShowNotify && (
                <div
                  className={
                    style.leftSideBar_innerNavigation__list_item_link_notify
                  }
                >
                  {this.props.number && <span>{this.props.number}</span>}
                </div>
              )}
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
