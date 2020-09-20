import React, { Component } from 'react';
import style from './Economizing.module.css';
import { ReactComponent as Wallet } from '../../../assests/images/LeftSideBar/wallet.svg';
import { ReactComponent as Hourglass } from '../../../assests/images/LeftSideBar/hourglass.svg';
import { connect } from 'react-redux';
import userSelectors from '../../../redux/selectors/leftSideBarSelectors';
class Economizing extends Component {
  // console.log(typeof money);
  // let timestamp =75;
  render() {
    const { money, time } = this.props;
    let hours = Math.floor(time / 60);
    let minutes = time - hours * 60;

    return (
      <>
        <section className={style.leftSideBar_economizing}>
          <ul className={style.leftSideBar_economizing__list}>
            <li className={style.leftSideBar_economizing__list_item}>
              <p className={style.leftSideBar_economizing__list_item_title}>
                Сэкономленные деньги
              </p>
              <p className={style.leftSideBar_economizing__list_item_value}>
                <Wallet className={style.svg} />
                {money} &#8372;
              </p>
            </li>
            <li className={style.leftSideBar_economizing__list_item}>
              <p className={style.leftSideBar_economizing__list_item_title}>
                Сэкономленное время
              </p>
              <p className={style.leftSideBar_economizing__list_item_value}>
                <Hourglass className={style.svg} />
                {hours}ч {minutes} мин
              </p>
            </li>
          </ul>
        </section>
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
  const array1 = [];
  const numberOfCigarettsInPack = 20;
  const priceForOneCigarettes = packPrice / numberOfCigarettsInPack;

  const savedMoney =
    (cigarettesPerDay - currentAmountOfCigarettes) * priceForOneCigarettes;

  const savedTime =
    (cigarettesPerDay - currentAmountOfCigarettes) * timeForOneCigarette;

  const totalTime = array1.push(savedTime);
  // console.log('totalTime', totalTime);
  return {
    money: savedMoney.toFixed(2),
    time: totalTime,
  };
};
export default connect(mapStateToProps)(Economizing);
