import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputMask from 'react-input-mask';
import { Formik, Form } from 'formik';
import { validationSchema } from './utils/validationSchema';
import ErrorValidation from './utils/ErrorValidation';
import funcMessage from './utils/funcMessage';
import PasswordForm from './PasswordForm';
import { avatars } from '../Avatar/dataAvatar';
import Card from '../Card/Card';
import operationsProfile from '../../redux/operations/operationsProfile';
import ModalInterview from '../ModalInterview/ModalInterview.js';
import CustomScrollbars from '../../assests/scroll/scroll';
import style from './Profile.module.css';

class Profile extends Component {
  state = {
    changePassword: false,
    isShowModal: this.props.isModalInterview === 0,
  };

  renderPasswordForm = () => {
    this.setState(prevState => ({
      changePassword: !prevState.changePassword,
    }));
  };

  render() {
    const { changePassword } = this.state;
    const { subscription } = this.props;
    if (!this.props.email) {
      return null;
    }
    return (
      <>
        <div className={style.wrapperHeader}>
          <h2 className={style.title}>Личный кабинет</h2>
        </div>
        <CustomScrollbars
          style={{ height: `calc( 100vh - 110px)` }}
          className={style.checkListPageScrollWrapper}
        >
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
                  }}
                  validationSchema={validationSchema}
                  onSubmit={values => {
                    const numb = values.phone
                      .split('')
                      .filter(symb => symb !== ' ');

                    const number = numb
                      .splice(numb[0] === '+' && numb[1] === '3' && 2)
                      .join('');
                    this.props.addDataUserOperation({
                      ...values,
                      phone:
                        number[0] === 8 &&
                        number[1] === 0 &&
                        number[2] === 8 &&
                        number[3] === 0
                          ? number.slice(2)
                          : number,
                    });
                    this.props.history.push('/checklist');
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className={style.form}>
                      <label className={style.label}>
                        <span className={style.titleInput}>Имя*</span>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.firstName.length !== 0 &&
                              touched.firstName &&
                              errors.firstName &&
                              style.inputInvalid)
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.firstName}
                            message={errors.firstName}
                          />
                        ) && funcMessage(errors.firstName)}
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
                            ' ' +
                            (values.lastName.length !== 0 &&
                              touched.lastName &&
                              errors.lastName &&
                              style.inputInvalid)
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.lastName}
                            message={errors.lastName}
                          />
                        ) && funcMessage(errors.lastName)}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Телефон</span>

                        <InputMask
                          type="tel"
                          name="phone"
                          defaultValue={values.phone}
                          id="phone"
                          mask="+3\8099 999 99 99"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.phone
                              .split('')
                              .splice(4)
                              .filter(symb => symb !== ' ' && symb !== '_')
                              .join('').length > 0 &&
                              touched.phone &&
                              errors.phone &&
                              style.inputInvalid)
                          }
                          placeholder="+380__ ___ __ __"
                        />
                        {values.phone
                          .split('')
                          .splice(4)
                          .filter(symb => symb !== ' ' && symb !== '_')
                          .join('').length > 0 &&
                          touched.phone &&
                          errors.phone &&
                          funcMessage('номер телефона введён не полностью')}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>E-mail*</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={() => {}}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.email.length !== 0 &&
                              touched.email &&
                              errors.email &&
                              style.inputInvalid)
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.email}
                            message={errors.email}
                          />
                        ) && funcMessage(errors.email)}
                      </label>
                      <button type="submit" className={style.btnSaveChange}>
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
                    src={
                      !this.props.avatar
                        ? avatars[16].image
                        : avatars.find(item => item.id === this.props.avatar)
                            ?.image
                    }
                    alt="avatar"
                    width="108"
                    height="108"
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
                <div
                  className={
                    style.subscription +
                    ' ' +
                    (!subscription && style.subscriptionFree) +
                    ' ' +
                    (subscription === 'Basic' && style.subscriptionBasic) +
                    ' ' +
                    (subscription === 'Noob' && style.subscriptionNoob) +
                    ' ' +
                    (subscription === 'Standart' &&
                      style.subscriptionStandart) +
                    ' ' +
                    (subscription === 'Premium' && style.subscriptionPremium) +
                    ' ' +
                    (subscription === 'Ultra' && style.subscriptionUltra)
                  }
                >
                  <span className={style.subscriptionName}>
                    {!subscription ? 'Free' : subscription}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    this.props.history.push('/subscriptions');
                  }}
                  className={style.button}
                >
                  Изменить подписку
                </button>
              </div>
            </div>

            {changePassword && (
              <PasswordForm renderPasswordForm={this.renderPasswordForm} />
            )}
            <Card />
          </div>
          {this.props.isModalInterview === 0 && (
            <ModalInterview close={() => null} />
          )}
        </CustomScrollbars>
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
    subscription: state.user.subscription,

    isModalInterview: state.quizInfo.smokeYears,
  };
};
const mapDispatchToProps = {
  addDataUserOperation: operationsProfile.addDataUserOperation,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Profile);
