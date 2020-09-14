import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import InputMask from "react-input-mask";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import actionsProfile from "../../redux/actions/actionsProfile";
import PasswordForm from "./PasswordForm";
import ErrorValidation from "./ErrorValidation";

import style from "./Profile.module.css";
import Card from "../Card/Card";
// import {
//   requiredField,
//   maxLengthCreator,
//   minLengthCreator,
// } from "./utils/validators"; //! delete
// import Input from "./utils/FormsControls";  //! delete
// const minLengthCreator2 = minLengthCreator(2); //! delete

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "минимальное количество символов: 2")
    .max(16, "максимальное количество символов: 16")
    .required("обязательное поле заполнения"),
  lastname: Yup.string()
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

    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    avatar: "",
  };

  componentDidMount() {
    this.setState((prevState) => ({ ...prevState, ...this.props }));
  }
  renderPasswordForm = () => {
    this.setState((prevState) => ({
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
  //   // const { firstname, lastname, phone, email, avatar } = this.state;
  //   this.props.addDataUserOperation({ ...this.state });
  // };

  render() {
    const { changePassword } = this.state;
    const { firstname, lastname, phone, email, avatar } = this.state;
    // const { firstname, lastname, phone, email, avatar } = this.props;

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
                    firstname: this.props.firstname,
                    lastname: this.props.lastname,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={({ values }) => {
                    this.props.addDataUserOperation({ ...values });
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className={style.form}>
                      {/* <form onSubmit={this.handleSubmit} className={style.form}> */}
                      {/* {console.log("values", values)}
                      {console.log("touched", touched)} */}
                      <label className={style.label}>
                        <span className={style.titleInput}>Имя</span>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          value={values.firstname}
                          // onChange={this.handleInputChange}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            " " +
                            (touched.firstname && errors.firstname
                              ? style.inputInvalid
                              : style.inputValid)
                          }
                        />
                        <ErrorValidation
                          touched={touched.firstname}
                          message={errors.firstname}
                        />
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Фамилия</span>
                        {/* <input
                          type="text"
                          name="lastname"
                          value={lastname}
                          onChange={this.handleInputChange}
                          className={style.input}
                        /> */}
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          value={values.lastname}
                          // onChange={this.handleInputChange}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            " " +
                            (touched.lastname && errors.lastname
                              ? style.inputInvalid
                              : style.inputValid)
                          }
                        />
                        <ErrorValidation
                          touched={touched.lastname}
                          message={errors.lastname}
                        />
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Телефон</span>
                        <InputMask
                          type="tel"
                          name="phone"
                          defaultValue={phone}
                          mask="+3\8099 999 99 99"
                          maskChar="_"
                          onChange={this.handleInputChange}
                          className={style.input}
                          placeholder="+380__ ___ __ __"
                        />
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>E-mail</span>
                        {/* <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                          className={style.input}
                        /> */}
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          // onChange={this.handleInputChange}
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
                      <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className={style.btnSaveChange}
                      >
                        Сохранить изменения
                      </button>
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
const mapStateToProps = (state) => {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    phone: state.user.phone,
    email: state.user.email,
    avatar: state.user.avatar,
  };
};

const mapDispatchToProps = {
  addDataUserOperation: actionsProfile.addDataUserSuccess,

  // addDataUserOperation: operationsProfile.addDataUserSuccess,
  // getDataUserOperation: operationsProfile.getDataUserSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
