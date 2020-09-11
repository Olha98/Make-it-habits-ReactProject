import React from "react";
import { style } from "./InnerNavigation.module.css";
import { ReactComponent as Bell } from "../../../assests/images/LeftSideBar/bell.svg";
import { ReactComponent as Win } from "../../../assests/images/LeftSideBar/win.svg";
import { ReactComponent as Calendar } from "../../../assests/images/LeftSideBar/calendar.svg";
import { NavLink } from "react-router-dom";

export default function InnerNavigation() {
  return (
    <div>
      <section className={style.leftSideBar_innerNavigation}>
        <ul className={style.leftSideBar_innerNavigation__list}>
          <li className={style.leftSideBar_innerNavigation__list_item}>
            <NavLink
              //   to="/"
              className={style.leftSideBar_innerNavigation__list_item_link}
            >
              <div>
                <Calendar />
              </div>
            </NavLink>
          </li>
          <li className={style.leftSideBar_innerNavigation__list_item}>
            <NavLink
              //   to="/"
              className={style.leftSideBar_innerNavigation__list_item_link}
            >
              <div>
                <Win />
              </div>
            </NavLink>
          </li>
          <li className={style.leftSideBar_innerNavigation__list_item}>
            <NavLink
              //   to="/"
              className={style.leftSideBar_innerNavigation__list_item_link}
            >
              <div>
                <Bell />
              </div>
            </NavLink>
            <div
              className={
                style.leftSideBar_innerNavigation__list_item_link_notify
              }
            >
              <span>20</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
