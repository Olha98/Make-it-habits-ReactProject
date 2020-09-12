import React from "react";
import style from "./Avatar.module.css";
import { avatars } from "./dataAvatar";
// ------------------------

function Avatar() {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapperHeader}>
          <h2 className={style.title}>Выбрать другой аватар</h2>
        </div>
        <div className={style.wrapperMain}>
          <ul className={style.list}>
            {avatars.map((avatar) => (
              <li key={avatar.id} className={style.item}>
                <img src={avatar.image} alt="avatar" width="157" height="157" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Avatar;
