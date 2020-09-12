import React from "react";
import { connect } from "react-redux";
//import avatar from "../../../assests/images/LeftSideBar/avatar.png";
import style from "../UserInfo/UserInfo.module.css";

function UserInfo({ photo, name, surname }) {
  return (
    <>
      <section className={style.leftSideBar_userInfo}>
        <div className={style.leftSideBar_userInfo__avatar}>
          <img src={photo} alt="avatar" />
        </div>
        <p className={style.leftSideBar_userInfo__name}>
          {name} {surname}
        </p>
        <button className={style.leftSideBar_userInfo__button}>Logout</button>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  photo: state.user.avatar,
  name: state.user.firstName,
  surname: state.user.lastName,
});
export default connect(mapStateToProps)(UserInfo);
