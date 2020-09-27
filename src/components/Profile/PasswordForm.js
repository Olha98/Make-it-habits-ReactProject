import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import { passwordValidationSchema } from './utils/validationSchema';
import funcMessage from './utils/funcMessage';
import ErrorValidation from './utils/ErrorValidation';
import operationsProfile from '../../redux/operations/operationsProfile';
import { ReactComponent as OpenedEye } from '../../assests/images/profile/openedEye.svg';
import { ReactComponent as ClosedEye } from '../../assests/images/profile/closedEye.svg';
import style from './Profile.module.css';

class PasswordForm extends Component {
  state = {
    passwordOld: false,
    passwordNew: false,
    passwordNewRepeat: false,

    typePassword: 'password',
    typeText: 'text',

    passwordFields: false,

    changePassword: this.props.changePassword,
  };

  onEyeIconOldPassword = name => {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const {
      passwordNew,
      passwordNewRepeat,

      typePassword,
      typeText,
    } = this.state;

    return (
      <>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={passwordValidationSchema}
          onSubmit={values => {
            values.confirmPassword !== '' &&
              this.props.postPasswordOperation({ ...values });
            this.props.renderPasswordForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className={style.form}>
              <label className={style.label}>
                <span className={style.titleInput}>Новый пароль</span>
                <div
                  className={style.eyeImage}
                  onClick={() => this.onEyeIconOldPassword('passwordNew')}
                >
                  {!passwordNew ? <ClosedEye /> : <OpenedEye />}
                </div>
                <input
                  type={!passwordNew ? typePassword : typeText}
                  autoComplete="off"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    style.input +
                    ' ' +
                    (values.password.length !== 0 &&
                      touched.password &&
                      errors.password &&
                      style.inputInvalid)
                  }
                />
                {(
                  <ErrorValidation
                    touched={touched.password}
                    message={errors.password}
                  />
                ) && funcMessage(errors.password)}
              </label>
              <label className={style.label}>
                <span className={style.titleInput}>Повторите пароль</span>
                <div
                  className={style.eyeImage}
                  onClick={() => this.onEyeIconOldPassword('passwordNewRepeat')}
                >
                  {!passwordNewRepeat ? <ClosedEye /> : <OpenedEye />}
                </div>
                <input
                  type={!passwordNewRepeat ? typePassword : typeText}
                  autoComplete="off"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    style.input +
                    ' ' +
                    (values.confirmPassword.length !== 0 &&
                      touched.confirmPassword &&
                      errors.confirmPassword &&
                      style.inputInvalid)
                  }
                />
                {(
                  <ErrorValidation
                    touched={touched.confirmPassword}
                    message={errors.confirmPassword}
                  />
                ) &&
                  funcMessage(
                    values.confirmPassword.length >= 1 &&
                      values.confirmPassword !== values.password &&
                      'пароли не совпадают',
                  )}
              </label>
              <button type="submit" className={style.btnSaveChange}>
                Сохранить пароль
              </button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapDispatchToProps = {
  postPasswordOperation: operationsProfile.postPasswordOperation,
};

export default connect(null, mapDispatchToProps)(PasswordForm);
