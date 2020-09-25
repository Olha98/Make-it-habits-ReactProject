import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/ru';
import Calendar from './Calendar';
import TimeDoItList from './TimeDoIt';
import CustomScrollbars from '../../assests/scroll/scroll';
import style from './RightSideBar.module.css';


class RightSideBar extends Component {
  state = {
    dayWeek: moment().format('dddd'),
    getData: moment().format('LL').split(' ').slice(0, 2),
  };

  render() {
    const { dayWeek, getData } = this.state;

    return (
      <>
        <div className={style.boxRightSideBar}>
          <div className={style.containerRightSideBar}>
            <div className={style.headerRightSideBar}>
              <div className={style.headerRightSideBarBox}>
                <span>{dayWeek}</span>
                <span>&#183;</span>
                <span>{getData.join().replace(/[\s.,%]/g, ' ')}</span>
              </div>
            </div>
            <div className={style.bodyRightSideBar}>
              <Calendar />
            </div>
            <div className={style.footerRightSideBar}>
              <CustomScrollbars style={{ width: 360, height: 370, top: 10 }}>
                <TimeDoItList />
              </CustomScrollbars>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightSideBar;
