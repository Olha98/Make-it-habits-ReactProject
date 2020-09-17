import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import style from './RightSideBar.module.css';
import Calendar from './Calendar';
import TimeDoItList from './TimeDoIt';
import moment from 'moment';
import 'moment/locale/ru';
import CustomScrollbars from '../../assests/scroll/scroll';
import { getHabitsOperation } from '../../redux/operations/calendarOperations';
import { connect } from 'react-redux';

const task = [
  {
    createAt: '2020-09-07T01:07:23.330Z',
    data: [null, null, null],
    planningTime: '2020-09-07T01:07:23.330Z',
    efficiency: 20,
    id: '5f4d9edf6375b430bda8ce92',
    name: 'Покушать кофеток и лечь спать',
    iteration: 'everyday',
  },

  {
    createAt: '2020-10-21T01:07:23.330Z',
    data: [null, null, null],
    planningTime: '2020-09-07T01:07:23.330Z',
    efficiency: 50,
    id: '5f4d9edf6375b430bda8ce92',
    name: 'Пойти поспать и посмотреть фильмец',
    iteration: 'onceADay',
  },

  {
    createAt: '2020-14-06T01:07:23.330Z',
    data: [null, null, null],
    planningTime: '2020-09-07T01:07:23.330Z',
    efficiency: 50,
    id: '5f4d9edf6375b430bda8ce92',
    name: 'Съесть килограм мороженого и закусить селеткой',
    iteration: 'onceInTwoDays',
  },

  {
    createAt: '2020-14-01T01:07:23.330Z',
    data: [null, null, null],
    planningTime: '2020-09-07T01:07:23.330Z',
    efficiency: 50,
    id: '5f4d9edf6375b430bda8ce92',
    name: 'Съесть килограм мороженого и закусить селеткой',
    iteration: 'MonWedFri',
  },

  {
    createAt: '2020-14-11T01:07:23.330Z',
    data: [null, null, null],
    planningTime: '2020-09-07T01:07:23.330Z',
    efficiency: 50,
    id: '5f4d9edf6375b430bda8ce92',
    name: 'Съесть килограм мороженого и закусить селеткой',
    iteration: 'TueThuSat',
  },
];

class RightSideBar extends Component {
  state = {
    dayWeek: moment().format('dddd'),
    getData: moment().format('LL').split(' ').slice(0, 2),
    currentDay: '',
  };


  render() {
    const { dayWeek, getData } = this.state;

    return (
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
            <CustomScrollbars style={{ width: 360, height: 300 }}>
              <TimeDoItList task={task} />
            </CustomScrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
