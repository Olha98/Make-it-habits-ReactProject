import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './CheckList.module.css';
import CheckListItem from './CheckListItem/CheckListItem';

class CheckList extends Component {
  render() {
    return (
      <div className={style.checkList}>
        <div className={style.checkListWrapper}>
          {console.log('this.props', this.props)}
          {this.props.habits
            ? // this.props.habits.filter(habit => {
              //     if (habit.efficiency !== 100) {
              //       return (
              //         <CheckListItem
              //           key={habit._id}
              //           habit={habit}
              //           // onClick={(e) => this.showFullInfo(e)}
              //         />
              //       );
              //     }
              //   })

              this.props.habits.map(habit => (
                <CheckListItem
                  key={habit._id}
                  habit={habit}
                  // onClick={(e) => this.showFullInfo(e)}
                />
              ))
            : 'No habits added'}

          {/* {console.log('this.state', this.state)}
          {this.props.habits
            ? this.props.habits.map(
                habit =>
                  habit.efficiency !== 100 && (
                    <CheckListItem
                      key={habit._id}
                      habit={habit}
                      // onClick={(e) => this.showFullInfo(e)}
                    />
                  ),
              )
            : 'No habits added'} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('stateList', state);
  return {
    habits: state.habits.allHabits,
  };
};

export default connect(mapStateToProps)(CheckList);
