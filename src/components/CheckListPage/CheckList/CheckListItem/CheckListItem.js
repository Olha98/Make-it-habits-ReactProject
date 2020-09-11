import React, { Component } from "react";
import style from "./CheckListItem.module.css";
import { ReactComponent as ButtonOk } from "../../../../assests/images/CheckListPage/button_ok.svg";
import { ReactComponent as ButtonDelete } from "../../../../assests/images/CheckListPage/button_delete.svg";
import { ReactComponent as ButtonEdit } from "../../../../assests/images/CheckListPage/button_edit.svg";

class CheckListItem extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div
        style={{ borderLeft: "8px solid #655de6" }}
        className={style.checkListItem}
      >
        <div>
          <div className={style.checkListItemContent}>
            <label className={style.checkListItemProgressLabel}>
              <span>Утренняя зарядка 10-15 мин</span>
              <progress
                className={style.checkListItemProgress}
                id="file"
                max="100"
                value="70"
              >
                70%
              </progress>
            </label>
            <p className={style.checkListItemProgressValue}>70%</p>
          </div>
          <p className={style.checkListItemProgressComment}>
            Прогресс привития привычки
          </p>
        </div>
        <div>
          <button
            className={[
              style.checkListButton,
              style.checkListButtonSubmit,
            ].join(" ")}
            type="button"
          >
            <ButtonOk />
          </button>
          <button
            className={[
              style.checkListButton,
              style.checkListButtonDelete,
            ].join(" ")}
            type="button"
          >
            <ButtonDelete />
          </button>
          <button className={style.checkListButtonEdit} type="button">
            <ButtonEdit />
          </button>
        </div>
      </div>
    );
  }
}

// function CheckListItem() {
//   return (
//     <div
//       style={{ borderLeft: "8px solid #655de6" }}
//       className={style.checkListItem}
//     >
//       <div>
//         <div className={style.checkListItemContent}>
//           <label for="file" className={style.checkListItemProgressLabel}>
//             <span>Утренняя зарядка 10-15 мин</span>
//             <progress
//               className={style.checkListItemProgress}
//               id="file"
//               max="100"
//               value="70"
//             >
//               70%
//             </progress>
//           </label>
//           <p className={style.checkListItemProgressValue}>70%</p>
//         </div>
//         <p className={style.checkListItemProgressComment}>
//           Прогресс привития привычки
//         </p>
//       </div>
//       <div>
//         <button
//           className={[style.checkListButton, style.checkListButtonSubmit].join(
//             " "
//           )}
//           type="button"
//         >
//           <ButtonOk />
//         </button>
//         <button
//           className={[style.checkListButton, style.checkListButtonDelete].join(
//             " "
//           )}
//           type="button"
//         >
//           <ButtonDelete />
//         </button>
//         <button className={style.checkListButtonEdit} type="button">
//           <ButtonEdit />
//         </button>
//       </div>
//     </div>
//   );
// }

export default CheckListItem;
