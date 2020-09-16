import React from "react";
import style from "./Achievements.module.css"
import AchievementsHeader from "./AchievementsHeader/AchievementsHeader";



const Achievements = () =>{


    return (
        <>
        <AchievementsHeader />
        <ul className={style.achievementsPageList}>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Отказ от 1 сигареты</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Отказ от 3 сигарет</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Отказ от 5 сигарет</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 1 день</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 3 дня</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 1 неделю</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 2 недели</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 1 месяц</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 3 месяца</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 6 месяцев</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Не курю 1 год</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>+1 год без сигарет</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>3 года без сигарет</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Уже 5. Дай пять!</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Вперед к мечте!</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Сохранил 1 час</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Сохранил 3 часа</p>
            </li>
                <li className={style.achievementsPageItem}>
                    <p className={style.achievementsPageText}>Сохранил 5 часов</p>
            </li>
            </ul>
            </>
    );
}

export default Achievements;