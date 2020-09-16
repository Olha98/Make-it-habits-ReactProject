import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import InputMask from "react-input-mask";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import dataUser from "../actions/dataUser";
// import actionsProfile from "../../redux/actions/actionsProfile";
import PasswordForm from "./PasswordForm";
import ErrorValidation from "./ErrorValidation";

import style from "./Profile.module.css";
import Card from "../Card/Card";
import operationsProfile from "../../redux/operations/operationsProfile";
// import {
//   requiredField,
//   maxLengthCreator,
//   minLengthCreator,
// } from "./utils/validators"; //! delete
// import Input from "./utils/FormsControls";  //! delete
// const minLengthCreator2 = minLengthCreator(2); //! delete

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "минимальное количество символов: 2")
    .max(16, "максимальное количество символов: 16")
    .required("обязательное поле заполнения"),
  lastName: Yup.string()
    .min(2, "минимальное количество символов: 2")
    .max(16, "максимальное количество символов: 16"),
  email: Yup.string()
    .email("укажите правильный email")
    .max(30, "максимальное количество символов: 30")
    .required("обязательное поле заполнения"),
});

class Profile extends Component {
  state = {
    changePassword: false,
  };

  // componentDidMount() {
  //   // console.log("this.props", this.props);
  //   // this.setState((prevState) => ({ ...prevState, ...this.props }));
  //   this.props.getDataUserOperation();
  // }
  renderPasswordForm = () => {
    this.setState(prevState => ({
      changePassword: !prevState.changePassword,
    }));
  };

  // ------------------

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const { name, value } = e.target;
  //   // this.setState({ [name]: value });
  //   // const { firstName, lastName, phone, email, avatar } = this.state;

  //   this.props.addDataUserOperation({ ...this.state });
  //   console.log("this.props", this.props);
  //   console.log("this.state", this.state);
  // };

  render() {
    const { changePassword } = this.state;
    const { firstName, lastName, phone, email, avatar } = this.state;

    if (!this.props.firstName) {
      return null;
    } //!костыль для formik, чтобы стейт рендерился сразу при переходе на страницу, а не при перезагрузке

    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Личный кабинет</h2>
          </div>

          <div className={style.wrapperMain}>
            <h3 className={style.titleInfo}>Личная информация</h3>

            <div className={style.wrapperForm}>
              <div className={style.wrapperFirstColumn}>
                <Formik
                  initialValues={{
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                    phone: this.props.phone,
                    email: this.props.email,
                    avatar: this.props.avatar,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(22222222, values);
                    this.props.addDataUserOperation({ ...values });
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className={style.form}>
                      <label className={style.label}>
                        <span className={style.titleInput}>Имя</span>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            " " +
                            (touched.firstName && errors.firstName
                              ? style.inputInvalid
                              : style.inputValid)
                          }
                        />
                        <ErrorValidation
                          touched={touched.firstName}
                          message={errors.firstName}
                        />
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Фамилия</span>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            " " +
                            (touched.lastName && errors.lastName
                              ? style.inputInvalid
                              : style.inputValid)
                          }
                        />
                        <ErrorValidation
                          touched={touched.lastName}
                          message={errors.lastName}
                        />
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Телефон</span>
                        <InputMask
                          type="tel"
                          name="phone"
                          defaultValue={values.phone}
                          id="phone"
                          mask="\80999999999"
                          onChange={handleChange}
                          className={style.input}
                          placeholder="+380__ ___ __ __"
                        />
                        {/* <ErrorValidation
                          touched={touched.phone}
                          message={errors.phone}
                        /> */}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>E-mail</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            " " +
                            (touched.email && errors.email
                              ? style.inputInvalid
                              : style.inputValid)
                          }
                        />
                        <ErrorValidation
                          touched={touched.email}
                          message={errors.email}
                        />
                      </label>
                      <NavLink
                        exact
                        to="/checklist"
                        className={style.linkChenlistSaveChanges}
                      >
                        <button
                          type="submit"
                          // onClick={()=>{handleSubmit()}}
                          className={style.btnSaveChange}
                        >
                          Сохранить изменения
                        </button>
                      </NavLink>
                    </Form>
                  )}
                </Formik>
                <button
                  onClick={this.renderPasswordForm}
                  className={style.buttonChangePassword}
                >
                  Изменить пароль
                </button>
              </div>

              <div className={style.wrapperSecondColumn}>
                <NavLink
                  exact
                  className={style.avatarWrapper}
                  to="/profile/avatar"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    width="108"
                    higth="108"
                    className={style.avatar}
                  />
                </NavLink>
                <NavLink
                  exact
                  className={style.editAvatar}
                  to="/profile/avatar"
                >
                  Выбрать другой аватар
                </NavLink>
                <div className={style.subscription}>
                  <span className={style.subscriptionName}>Basic</span>
                </div>
                <NavLink
                  exact
                  // className={style.avatarWrapper}
                  to="/subscriptions"
                >
                  <button
                    // type="submit"
                    // onSubmit={this.handleSubmit}
                    // onClick={this.onChangeSubscriptions}
                    className={style.button}
                  >
                    Изменить подписку
                  </button>
                </NavLink>
              </div>
            </div>

            {changePassword && <PasswordForm />}
            <Card />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    phone: state.user.phone,
    email: state.user.email,
    avatar: state.user.avatar,
  };
};

const mapDispatchToProps = {
  // addDataUserOperation: actionsProfile.addDataUserSuccess,

  getDataUserOperation: operationsProfile.getDataUserOperation,
  addDataUserOperation: operationsProfile.addDataUserOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
