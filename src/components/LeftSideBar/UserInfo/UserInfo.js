import React from "react";
import { connect } from "react-redux";
import leftSideBarOperations from "../../../redux/operations/leftSideBarOperations";
//import avatar from "../../../assests/images/LeftSideBar/avatar.png";
import style from "../UserInfo/UserInfo.module.css";
//import authOperations from "../../../redux/operations/authOperation";
const UserInfo = ({ photo, name, surname, logout }) => {
  console.log("state", name);
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
  name: state.user.firstname,
  surname: state.user.lastname,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(leftSideBarOperations.logout()),
});

// const mapStateToProps = (state) => ({
//   photo: state.user.avatar,
//   name: state.user.firstName,
//   surname: state.user.lastName,
// });
// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(authOperations.userLogOut()),
// });
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
