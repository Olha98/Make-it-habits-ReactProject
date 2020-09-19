import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { connect } from 'react-redux';
import moment from 'moment';
import addActualHabits from '../../redux/actions/calendarActions';
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

const Calendar = ({ userHabits, onaddActualHabitsCalendar }) => {
  const [startDate, setStartDate] = useState(new Date());

  const nowDay = new Date();

  const choseActualWeekDay = moment(startDate)
    .locale('en')
    .format('dddd')
    .slice(0, 3); //weekday Mon

  const calendarActualDay = moment(startDate).format('L');
  console.log(calendarActualDay, 'ДЕНЬ КОТОРЫЙ ВЫБРАЛА!');

  const currentHabit = [];


  const allHabits = userHabits;

  for (let habit of allHabits) {
    const startPlanningTime = habit.planningTime;
    const startWeekPlanningTime = moment(startPlanningTime)
      .locale('en')
      .format('dddd')
      .slice(0, 3);

    let startPlanningTimeinML = new Date(startPlanningTime).getTime(); // 1498555006770
    switch (habit.iteration) {
      case 'onceInTwoDays':
        //  console.log(habit, 'onceInTwoDays!!');
        const arrayHabitsOnceInTwoDays = [];

        for (let i = 0; i < 21; i++) {
          arrayHabitsOnceInTwoDays.push(
            moment(startPlanningTimeinML).format('L'),
          );
          startPlanningTimeinML += 86400000 * 2;
        }

        for (let arrayHabit of arrayHabitsOnceInTwoDays) {
          if (arrayHabit.includes(calendarActualDay)) {
            currentHabit.push(habit);
          }
        }

        break;

      case 'everyday':
        const arrayHabitsEveryDay = [];
        for (let i = 0; i < 21; i++) {
          arrayHabitsEveryDay.push(moment(startPlanningTimeinML).format('L'));
          startPlanningTimeinML += 86400000;
        }

        for (let arrayHabit of arrayHabitsEveryDay) {
          if (arrayHabit.includes(calendarActualDay)) {
            const result = arrayHabit.includes(calendarActualDay);
            console.log(result);
            currentHabit.push(habit);
          }
        }

        break;

      case 'TueThuSat':
        console.log(habit, 'TueThuSat!!');
        const iterationTueThuSat = habit.iteration
          .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
          .split(' ');

        for (let iteration of iterationTueThuSat) {
          console.log(iteration, 'iteration');
          if (iteration.includes(choseActualWeekDay)) {
            currentHabit.push(habit);
          }
        }
        break;

      case 'MonWedFri':
        // console.log(habit, 'MonWedFri!!');
        const iterationMonWedFri = habit.iteration
          .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
          .split(' ');

        for (let iteration of iterationMonWedFri) {
          if (iteration.includes(choseActualWeekDay)) {
            currentHabit.push(habit);
          }
        }
        break;
      default:
        break;
    }
  }

  console.log(currentHabit, 'currentHabit');

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
