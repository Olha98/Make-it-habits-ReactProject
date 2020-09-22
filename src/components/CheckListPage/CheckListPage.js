import React from 'react';
import CheckListHeader from './CheckListHeader/CheckListHeader';
import style from './CheckListPage.module.css';
import CheckList from './CheckList/CheckList';
import CustomScrollbars from '../../assests/scroll/scroll';

function CheckListPage() {
  return (
    <div className={style.checkListPageContainer}>
      <CheckListHeader />
      <CustomScrollbars
        style={{ height: `calc( 100vh - 110px)` }}
        className={style.checkListPageScrollWrapper}
      >
        <CheckList />
      </CustomScrollbars>
    </div>
  );
}

export default CheckListPage;
