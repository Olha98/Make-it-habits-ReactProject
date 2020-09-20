import React, { Component } from 'react';
import { connect } from 'react-redux';
import operationsProfile from '../../redux/operations/operationsProfile';
import { ReactComponent as OpenedEye } from '../../assests/images/profile/openedEye.svg';
import { ReactComponent as ClosedEye } from '../../assests/images/profile/closedEye.svg';
import style from './Profile.module.css';
import { Form, Formik } from 'formik';
import { validationSchema } from './utils/validationSchema';
import funcMessage from './utils/funcMessage';
import ErrorValidation from './utils/ErrorValidation';

class PasswordForm extends Component {
  state = {
    passwordOld: false,
    passwordNew: false,
    passwordNewRepeat: false,

    typePassword: 'password',
    typeText: 'text',

    passwordFields: false,

    // password: '',
    // confirmPassword: '',
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.postPasswordOperation({
  //     password: this.state.password,
  //     confirmPassword: this.state.confirmPassword,
  //   });
  // };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

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
          validationSchema={validationSchema}
          onSubmit={values => {
            this.props.postPasswordOperation({ ...values });
            // if (code === 200) {
            //   <span className={style.errorMessage}>сохранения изменены!</span>;
            // }
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
                  name="password"
                  // value={this.state.password}
                  // onChange={this.handleChange}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // className={style.input}
                  className={
                    style.input +
                    ' ' +
                    (values.password.length !== 0 &&
                      touched.password &&
                      errors.password &&
                      style.inputInvalid)
                    // : style.inputValid
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
                  name="confirmPassword"
                  // value={this.state.confirmPassword}
                  // onChange={this.handleChange}
                  // className={style.input}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className={
                    style.input +
                    ' ' +
                    (values.confirmPassword.length !== 0 &&
                      touched.confirmPassword &&
                      errors.confirmPassword &&
                      style.inputInvalid)
                    // : style.inputValid
                  }
                />
                {(
                  <ErrorValidation
                    touched={touched.confirmPassword}
                    message={errors.confirmPassword}
                  />
                ) &&
                  funcMessage(
                    // errors.confirmPassword,
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
