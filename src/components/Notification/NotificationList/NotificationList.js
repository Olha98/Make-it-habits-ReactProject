import React, { Component } from "react";
import NotificationListItem from "../NotificationListItem/NotificationListItem";
import style from "./NotificationList.module.css";

class NotificationList extends Component {
  state = {
    newHabbitsDoneToday: [
      {
        id: 1,
        name: "Утренняя зарядка 10-15 мин",
      },
      {
        id: 2,
        name: "Замена сигарет на леденцы, орешки и т.п.",
      },
      {
        id: 3,
        name: "Читать минимум 30 мин в день",
      },
    ],
  };

  render() {
    return (
      <>
        <div className={style.NotificationList}>
          {this.state.newHabbitsDoneToday.map((newHabbitDoneToday) => (
            <NotificationListItem
              key={newHabbitDoneToday.id}
              newHabbitDoneToday={newHabbitDoneToday.name}
            />
          ))}
        </div>
      </>
    );
  }
}
export default NotificationList;
