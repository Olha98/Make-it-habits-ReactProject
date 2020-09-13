import React from "react";
import style from "./Avatar.module.css";
// ------------------------
import avatar1 from "../../assests/images/avatars/Avatar-6.png";
import avatar2 from "../../assests/images/avatars/Avatar-2.png";
import avatar3 from "../../assests/images/avatars/Avatar-12.png";
import avatar4 from "../../assests/images/avatars/Avatar-11.png";
import avatar5 from "../../assests/images/avatars/Avatar-7.png";
import avatar6 from "../../assests/images/avatars/Avatar-9.png";
// ------------ 4b -------------
// import avatar7 from "../../assests/images/avatars/Avatar-3.png";
// import avatar8 from "../../assests/images/avatars/Avatar-4.png";
// import avatar9 from "../../assests/images/avatars/Avatar-5.png";
// import avatar10 from "../../assests/images/avatars/Avatar-10.png";
// import avatar11 from "../../assests/images/avatars/Avatar-8.png";
// import avatar12 from "../../assests/images/avatars/Avatar-13.png";
// import avatar13 from "../../assests/images/avatars/Avatar-1.png";
// import avatar7 from "../../assests/images/avatars/Avatar.png";

const avatars = [
  { image: avatar1, id: 1 },
  { image: avatar2, id: 2 },
  { image: avatar3, id: 3 },
  { image: avatar4, id: 4 },
  { image: avatar5, id: 5 },
  { image: avatar6, id: 6 },
  // -------- 4b ----------
  // { image: avatar7, id: 7 },
  // { image: avatar8, id: 8 },
  // { image: avatar9, id: 9 },
  // { image: avatar10, id: 10 },
  // { image: avatar11, id: 11 },
  // { image: avatar12, id: 12 },
  // { image: avatar13, id: 13 },
];

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
