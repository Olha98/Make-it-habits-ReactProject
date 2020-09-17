import React, { Component } from 'react';
import style from './Profile.module.css';
import { ReactComponent as OpenedEye } from '../../assests/images/profile/openedEye.svg';
import { ReactComponent as ClosedEye } from '../../assests/images/profile/closedEye.svg';
import operationsProfile from '../../redux/operations/operationsProfile';
import { connect } from 'react-redux';

class PasswordForm extends Component {
  state = {
    passwordOld: false,
    passwordNew: false,
    passwordNewRepeat: false,

    typePassword: 'password',
    typeText: 'text',

    passwordFields: false,

    password: '',
    confirmPassword: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postPasswordOperation({
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    });
    console.log('this.props.postPasswordOperation', {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onEyeIconOldPassword = name => {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const {
      passwordOld,
      passwordNew,
      passwordNewRepeat,

      typePassword,
      typeText,
    } = this.state;

    return (
      <>
        <form className={style.form} onSubmit={this.handleSubmit}>
          {/* <label className={style.label}>
            <span className={style.titleInput}>Текущий пароль</span>
            <div
              className={style.eyeImage}
              onClick={() => this.onEyeIconOldPassword('passwordOld')}
            >
              {!passwordOld ? <ClosedEye /> : <OpenedEye />}
            </div>
            <input
              type={!passwordOld ? typePassword : typeText}
              name="passwordOld"
              onChange={this.handleChange}
              className={style.input}
            />
          </label> */}

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
              value={this.state.password}
              onChange={this.handleChange}
              className={style.input}
            />
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
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <button type="submit" className={style.btnSaveChange}>
            Сохранить пароль
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  postPasswordOperation: operationsProfile.postPasswordOperation,
};

export default connect(null, mapDispatchToProps)(PasswordForm);
