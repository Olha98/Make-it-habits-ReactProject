import React, { Component } from "react";
import { connect } from "react-redux";
//import leftSideBarOperations from "../../../redux/operations/leftSideBarOperations";
//import avatar from "../../../assests/images/LeftSideBar/avatar.png";
import style from "../UserInfo/UserInfo.module.css";
import authOperations from "../../../redux/operations/authOperation";
import Axios from "axios";
import { render } from "@testing-library/react";
import authAction from "../../../redux/actions/authAction";
Axios.defaults.baseURL = "https://make-it-habit-api.herokuapp.com";

class UserInfo extends Component {
  // logout = (e) => {
  //   console.log(e.target, "target");

  //   return (Axios.defaults.headers.common.Authorization = "");
  // };
  render() {
    console.log("this.props", this.props);
    const { photo, name, surname, logout } = this.props;
    return (
      <>
        <section className={style.leftSideBar_userInfo}>
          <div className={style.leftSideBar_userInfo__avatar}>
            <img src={photo} alt="avatar" />
          </div>
          <p className={style.leftSideBar_userInfo__name}>
            {name ? `${name} ${surname}` : "User"}
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
  }
}

// const mapStateToProps = (state) => ({
//   photo: state.user.avatar,
//   name: state.user.firstname,
//   surname: state.user.lastname,
// });
// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(leftSideBarOperations.logout()),
// });

const mapStateToProps = (state) => ({
  photo: state.user.avatar,
  name: state.user.firstName,
  surname: state.user.lastName,
});
// const mapDispatchToProps = (dispatch) => ({
//   //logout: () => dispatch(authOperations.userLogOut()),
//   logout: authOperations.logOutSuccess,
// });
export default connect(mapStateToProps, {
  logout: authAction.logOutSuccess,
})(UserInfo);
