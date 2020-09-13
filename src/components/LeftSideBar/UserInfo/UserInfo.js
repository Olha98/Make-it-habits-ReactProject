import React from "react";
import { connect } from "react-redux";
import leftSideBarOperations from "../../../redux/operations/leftSideBarOperations";
//import avatar from "../../../assests/images/LeftSideBar/avatar.png";
import style from "../UserInfo/UserInfo.module.css";

const UserInfo = ({ photo, name, surname, logout }) => {
  return (
    <>
      <section className={style.leftSideBar_userInfo}>
        <div className={style.leftSideBar_userInfo__avatar}>
          <img src={photo} alt="avatar" />
        </div>
        <p className={style.leftSideBar_userInfo__name}>
          {name} {surname}
        </p>
        <button
          type="button"
          onClick={logout}
          className={style.leftSideBar_userInfo__button}
        >
          Выход
        </button>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  photo: state.user.avatar,
  name: state.user.firstName,
  surname: state.user.lastName,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(leftSideBarOperations.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
