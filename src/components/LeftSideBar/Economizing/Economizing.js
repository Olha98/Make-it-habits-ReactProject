import React from "react";
import style from "./Economizing.module.css";
import { ReactComponent as Wallet } from "../../../assests/images/LeftSideBar/wallet.svg";
import { ReactComponent as Hourglass } from "../../../assests/images/LeftSideBar/hourglass.svg";
import { connect } from "react-redux";
import userSelectors from "../../../redux/selectors/leftSideBarSelectors";
const Economizing = ({ money, time }) => {
  // console.log(typeof money);
  // let timestamp =75;
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
};

const mapStateToProps = (state) => {
  const numberOfCigarettsInPack = 20;
  const priceForOneCigarettes =
    userSelectors.getCigarettePackPrice(state) / numberOfCigarettsInPack;

  console.log("priceForOneCigarettes", priceForOneCigarettes);
  const savedMoney =
    (userSelectors.getConstAmountOfCigarettesPerDay(state) -
      userSelectors.getCurrentAmountOfCigarettes(state)) *
    priceForOneCigarettes;

  const savedTime =
    (userSelectors.getConstAmountOfCigarettesPerDay(state) -
      userSelectors.getCurrentAmountOfCigarettes(state)) *
    userSelectors.getTimeForOneCigarette(state);
  return {
    money: savedMoney,
    time: savedTime,
  };
};
export default connect(mapStateToProps)(Economizing);
