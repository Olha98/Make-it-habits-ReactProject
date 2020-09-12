import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const birthdayStyle = `
  .react-datepicker__month-container {
	font-family: "Rubik";
	 display: flex;
	 flex-direction: column;
	 width: 378px;
	 height: 392px;
	 border-radius: 0px;
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
  }

  

  .react-datepicker__header{
	border-radius: 0%;
	background-color: #fff;
  }


  .react-datepicker__current-month{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
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
    height: 30px;
  }

  .react-datepicker__day-names{
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	padding: 20px;
	text-transform: uppercase;
	border: 1px solid #D5E1DC;
	
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

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  //   const isWeekday = date => {
  //     const day = getDay(date);
  //     return day !== 0 && day !== 6;
  //   };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <style>{birthdayStyle}</style>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="ru"
        inline
        // filterDate={isWeekday}
      />
    </>
  );
};

export default Calendar;
