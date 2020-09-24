import React, { Component } from 'react';
import style from './Economizing.module.css';
import { ReactComponent as Wallet } from '../../../assests/images/LeftSideBar/wallet.svg';
import { ReactComponent as Hourglass } from '../../../assests/images/LeftSideBar/hourglass.svg';
import { connect } from 'react-redux';
import userSelectors from '../../../redux/selectors/leftSideBarSelectors';

// const checkDayToday = () => {
//   const date = new Date();
//   console.log('date', date);
//   const todayDate = Date.now();
//   console.log('todayDate', todayDate);

//   const dateMs = date.getTime();
//   console.log('dateMs', dateMs);
//   const dayPass = Math.round((todayDate - dateMs) / 86400000);
//   return console.log('dayPass', dayPass);
// };

//console.log('checkDayToday', checkDayToday());
class Economizing extends Component {
  state = {
    money: this.props.money,
    time: this.props.time,
    data: 0,
    startedAt: 0,
    quantity: 0,
  };

  checkDayToday = () => {
    const date = new Date(this.props.startTime);
    console.log('date', date);
    const todayDate = Date.now();
    console.log('todayDate', todayDate);

    const dateMs = date.getTime();
    console.log('dateMs', dateMs);
    const dayPass = Math.round((todayDate - dateMs) / 86400000);
    console.log('dayPass', dayPass);
    if (!this.props.prevData[dayPass]) {
      this.setState({
        quantity: this.props.prevData[dayPass],
        startedAt: this.props.startTime,
        data: this.props.prevData,
        money: 0,
        time: 0,
      });
    } else {
      this.setState({
        money: this.props.money,
        time: this.props.time,
      });
    }
  };
  render() {
    const { time } = this.props;
    let hours = Math.floor(time / 60);
    let minutes = time - hours * 60;

    return (
      <>
        <div className={style.leftSideBar_economizing}>
          <ul className={style.leftSideBar_economizing__list}>
            <li className={style.leftSideBar_economizing__list_item}>
              <p className={style.leftSideBar_economizing__list_item_title}>
                Сэкономленные деньги
              </p>

              <p
                className={
                  this.props.money >= 0
                    ? style.leftSideBar_economizing__list_item_value
                    : style.leftSideBar_economizing__list_item_value_red
                }
              >
                <Wallet className={style.svg} />
                {this.props.money} &#8372;
              </p>
            </li>
            <li className={style.leftSideBar_economizing__list_item}>
              <p className={style.leftSideBar_economizing__list_item_title}>
                Сэкономленное время
              </p>
              <p
                className={
                  this.props.time >= 0
                    ? style.leftSideBar_economizing__list_item_value
                    : style.leftSideBar_economizing__list_item_value_red
                }
              >
                <Hourglass className={style.svg} />
                {hours}ч {minutes} мин
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const packPrice = userSelectors.getCigarettePackPrice(state);
  const cigarettesPerDay = userSelectors.getConstAmountOfCigarettesPerDay(state)
    ? userSelectors.getConstAmountOfCigarettesPerDay(state)
    : 0
    ? userSelectors.getCigarettePackPrice(state)
    : 0;
  const currentAmountOfCigarettes = userSelectors.getCurrentAmountOfCigarettes(
    state,
  )
    ? userSelectors.getCurrentAmountOfCigarettes(state)
    : 0;
  const timeForOneCigarette = userSelectors.getTimeForOneCigarette(state)
    ? userSelectors.getTimeForOneCigarette(state)
    : 0;
  //const array1 = [];
  const numberOfCigarettsInPack = 20;
  const priceForOneCigarettes = packPrice / numberOfCigarettsInPack;
  let savedMoney, savedTime;
  if (!userSelectors.getCurrentAmountOfCigarettes(state)) {
    savedMoney = 0;
    savedTime = 0;
  } else {
    savedMoney =
      (cigarettesPerDay - currentAmountOfCigarettes) * priceForOneCigarettes;

    savedTime =
      (cigarettesPerDay - currentAmountOfCigarettes) * timeForOneCigarette;
  }

  // const totalTime = array1.push(savedTime);
  // console.log('totalTime', totalTime);
  return {
    money: savedMoney.toFixed(2),
    time: savedTime,
    startTime: state.cigarettes.startedAt,
    prevData: state.cigarettes.data,
  };
};
export default connect(mapStateToProps)(Economizing);
