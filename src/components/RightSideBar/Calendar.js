import React from "react";
import DatePicker from "react-datepicker";

class Example extends React.Component {
	state = {
	  startDate: new Date()
	};
   
	handleChange = date => {
	  this.setState({
		startDate: date
	  });
	};
   
	render() {
	  return (
		<DatePicker
		  selected={this.state.startDate}
		  onChange={this.handleChange}
		/>
	  );
	}
  }

  export default Example
