import React, { Component } from 'react';
import { connect } from 'react-redux';
import chekListOperation from '../../../redux/operations/chekListOperation';
// import chekListOperation from "../../../redux/operations/chekListOperation";
import style from './CheckList.module.css';
import CheckListItem from './CheckListItem/CheckListItem';

class CheckList extends Component {
  // state = {
  //   habits: [
  //     {
  //       createAt: "2020-09-01",
  //       data: [null, null, null],
  //       planningTime: "10:00",
  //       efficiency: 70,
  //       _id: "5f4d9edf6375b430bda8ce92",
  //       name: "Утренняя зарядка 10-15 мин",
  //       iteration: "everyday", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
  //     },
  //     {
  //       createAt: "2020-09-01T01:07:23.330Z",
  //       data: [null, null, null],
  //       planningTime: 0,
  //       efficiency: 50,
  //       _id: "5f4d9edf6375b430hgfjhgf",
  //       name: "Замена сигарет на леденцы, орешки и т.п.",
  //       iteration: "", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
  //     },
  //     {
  //       createAt: "2020-09-01T01:07:23.330Z",
  //       data: [null, null, null],
  //       planningTime: 0,
  //       efficiency: 10,
  //       _id: "5f4d9edf6375b430bdfhgjf",
  //       name: "Читать минимум 30 мин в день",
  //       iteration: "", //everyday, onceADay, onceInTwoDays, MonWedFri,TueThuSat,,
  //     },
  //   ],
  // };

  componentDidMount() {
    // console.log("HELLOOO");
    // console.log("this.props", this.props);
    // this.props.getCheckList();
  }

  render() {
    // this.props.addStatus();

    return (
      <div className={style.checkList}>
        {this.props.habits
          ? this.props.habits.map(habit => (
              <CheckListItem
                key={habit._id}
                habit={habit}
                // onClick={(e) => this.showFullInfo(e)}
              />
            ))
          : 'No habits added'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.user.habits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getCheckList: () => dispatch(chekListOperation.getHabitsOperation()),
    addStatus: () => dispatch(chekListOperation.addHabitStatus()),
  };
};

export default connect(mapStateToProps)(CheckList);
