import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import RightSideBar from './RightSideBar';
import { connect } from 'react-redux';
import moment, { parseTwoDigitYear } from 'moment';
registerLocale('ru', ru);

const birthdayStyle = `
  .react-datepicker__month-container {
	font-family: "Rubik";
	 display: flex;
	 flex-direction: column;
	 width: 374px;
	 height: 392px;
   border-radius: 0px;
   border:none;
   border-bottom: 1px solid #d5e1dc;
  }

  .react-datepicker__navigation--previous{
    margin-top: 20px;
  }

  .react-datepicker__current-month {
    font-weight: 500;
    font-size: 14px;
    padding: 0px;
    display: flex;
    background-color: #43D190;
    margin-left: 120px;
    color: #ffff;
    border-radius: 5px;
    width: 120px;
    
  }


  .react-datepicker__month {
	display: flex;
	width: 378px;
	max-height: 392px;
	height: 100%;
	flex-direction: column;
	padding: 20px;
	margin: 0;
	justify-content: space-between;
  border: none;
  border-radius: 0px;
  }

  

  .react-datepicker__header{
	border-radius: 0%;
  background-color: #fff;
  border:none;
  border-top: 1px solid #d5e1dc;
  }


  .react-datepicker__current-month{
	display: flex;
	justify-content: center;
	align-items: center;
  height: 25px;
  margin-top: 18px;
  margin-bottom: 25px;

  }


  .react-datepicker__day--selected, 
  .react-datepicker__day--keyboard-selected {
	background: #43D190;
	border-radius: 5px;
	border: 1px solid #43D190;
  color: white;
  }

  .react-datepicker__day--keyboard-selected:hover{
	background: #43D190;
	border-radius: 5px;
	border: 1px solid #43D190;
  color: white;
  }

  .react-datepicker{
    
    border-radius: 0px;
    border: 0px; 
  
  }

  .react-datepicker__day--selected:hover{
	background: #43D190;
	border-radius: 5px;
	border: 1px solid #43D190;
    color: white;
  }

  .react-datepicker__day--selected:default{
	border: 1px solid #43D190;
  }

  .react-datepicker__day--keyboard-selected:default{
	border: 1px solid #43D190;
  }

  .react-datepicker__day:hover{
	border: 2px solid #43D190;
	background: #fff;
	color: #43D190;
  }

  .react-datepicker__day{
	border: 2px solid #fff;
  width: 30px;
  display: flex;
  height: 30px;
  justify-content: center;
	align-items: center;
  }

  .react-datepicker__day-names{
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	padding: 20px;
	text-transform: uppercase;
  border-top: 1px solid #D5E1DC;
  border-bottom: 1px solid #D5E1DC;
	
  }

  .react-datepicker__day-name{
	color: #BDBDBD;
  }

  .react-datepicker__week {
	font-style: normal;
	font-weight: normal;
	display: flex;
	font-size: 14px;
	line-height: 17px;
	align-items: center;
  justify-content: space-between;

  }

  .react-datepicker__navigation--next{
    margin-top: 20px;
  }

 

  .react-datepicker__navigation--next::after{
   contant:"";
   position: absolute;
   transform: rotate(-135deg);
   width: 30px;
    height: 30px;
    color: red;
 

  }

  `;

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

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dataNow = Data.now();
  const nowDay = new Date();
  const choseDay = startDate;
  const allHabits = task;

// var millennium =new Date(2000, 0, 1) //Month is 0-11 in JavaScript

// //Get 1 day in milliseconds
// var one_day=1000*60*60*24
 
// //Calculate difference btw the two dates, and convert to days
const dataNeq = Math.ceil((nowDay.getTime()-nowDay.getTime())/(one_day))
console.log(dataNeq)
 

  const resultArray = [];
  console.log()

  for (let i = 0; i < 21; i++) {
    resultArray.push(i)
    i+=
  }

  for (let habit of allHabits) {
    const startPlanningTime = habit.planningTime;
    console.log(startPlanningTime, 'startPlanningTime');

    const date = new Date(startPlanningTime);

    const miliSecPlanningTime = Number(date.getMinutes()) * 60 * 1000;
    console.log(miliSecPlanningTime, 'miliSecPlanningTime');

    switch (habit.iteration) {
      case 'onceInTwoDays':
        console.log(habit, 'onceInTwoDays!!');
        
        break;

      case 'everyday':
        console.log(habit, 'everyday!!');
        break;

      case 'TueThuSat':
        console.log(habit, 'TueThuSat!!');
        break;

      case 'MonWedFri':
        console.log(habit, 'MonWedFri!!');
        break;

      default:
        break;
    }
  }

  return (
    <>
      <style>{birthdayStyle}</style>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        locale="ru"
        inline
      />
    </>
  );
};

const mapStateToProps = function (state) {
  return {
    userHabits: state.user.habits,
  };
};

export default connect(mapStateToProps)(Calendar);
