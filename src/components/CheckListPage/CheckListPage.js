import React from "react";
import CheckListHeader from "./CheckListHeader/CheckListHeader";
import style from "./CheckListPage.module.css";
import CheckList from "./CheckList/CheckList";

function CheckListPage() {
  return (
    <div className={style.checkListPageContainer}>
      <CheckListHeader />
      <CheckList />
    </div>
  );
}

export default CheckListPage;
