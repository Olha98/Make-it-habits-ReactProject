import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operationsProfile from '../../redux/operations/operationsProfile';
import { avatars } from './dataAvatar';
import CustomScrollbars from '../../assests/scroll/scroll';
import style from './Avatar.module.css';

class Avatar extends Component {
  changeAvatar = id => {
    this.props.addDataUserOperation({ avatar: id });
  };

  render() {
    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Выбрать другой аватар</h2>
          </div>
          <CustomScrollbars
            style={{ height: `calc( 100vh - 110px)` }}
            className={style.checkListPageScrollWrapper}
          >
            <div className={style.wrapperMain}>
              <ul className={style.list}>
                {avatars.map(avatar => (
                  <li
                    key={avatar.id}
                    onClick={() => {
                      this.changeAvatar(avatar.id);
                    }}
                    className={style.item}
                  >
                    <NavLink exact to="/profile">
                      <img
                        src={avatar.image}
                        alt="avatar"
                        width="157"
                        height="157"
                      />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </CustomScrollbars>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.user.avatar,
  };
};

const mapDispatchToProps = {
  addDataUserOperation: operationsProfile.addDataUserOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
