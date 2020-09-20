import React from 'react';
import { connect } from 'react-redux';
import TaskDoItItem from './TaskDiItItem';
import moment from 'moment';

const TimeDoIt = ({ currentHabits }) => {


// const newCurrent = currentHabits.sort( (a, b) => moment(new Date(a.planningTime).format('LT').replace(/:/g, '')) 
// - moment(new Date(b.planningTime).format('LT').replace(/:/g, '')) 
  // for(let currentHabit of currentHabits){
  //   const time = moment(new Date(currentHabit.planningTime)).format('LT').replace(/:/g, '');
  //   // console.log('time', time.replace(/:/g, ''))
  //   // const arr =[1123, 345, 985, 1030]
  //   // arr.sort( (a, b) => a - b );
  //   // console.log(arr)

  // }
  // const x = currentHabits.sort((a, b) => a.moment(new Date(planningTime)).format('LT').replace(/:/g, '')
  //  - b.moment(new Date(planningTime)).format('LT').replace(/:/g, ''));
  // console.log(x,"x")


//   for (let currentHabit of currentHabits) {

//     dates.push(moment(currentHabit.created));
//   }
//   dates.sort(function(a,b){
//     var da = new Date(a).getTime();
//     var db = new Date(b).getTime();

//     return da < db ? -1 : da > db ? 1 : 0
//   });
// }
// console.log(dates);


  // const getNamesSortedByFriendsCount = users => {

  //   currentHabits.sort((a, b) => {
  //     return{
  //       new Date(a.planningTime) - new Date(b.planningTime)
  //     }
      
  //   });
  //   return users.map(elem => elem.name);
  
  // };
  
  // console.log(getNamesSortedByFriendsCount(users));




  return (
    <ul>
      {currentHabits &&
        currentHabits.map(currentHabit => (
          <TaskDoItItem currentHabit={currentHabit} key={currentHabit._id} />
        ))}
    </ul>
  );
};

const mapStateToProps = function (state) {
  return {
    currentHabits: state.habits.currentHabits,
  };
};

export default connect(mapStateToProps)(TimeDoIt);
