import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
// the locale you want

const birthdayStyle = `
.react-datepicker__day--selected{
	background-color: orange;
	color: white;
  }
  
 
 
  .react-datepicker {

  }` ;

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <style>{birthdayStyle}</style>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
		locale="ru"
        inline
      />
    </>
  );
};

export default Calendar;
