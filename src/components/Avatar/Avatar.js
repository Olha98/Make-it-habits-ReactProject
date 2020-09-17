import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operationsProfile from '../../redux/operations/operationsProfile';
import { avatars } from './dataAvatar';
import style from './Avatar.module.css';
// ------------------------

class Avatar extends Component {
  state = {
    avatars,
  };

  changeAvatar = () => {
    const qwerty = avatars.find(item => item.id === 10);
    console.log('qwerty', qwerty);
    // this.props.addDataUserOperation({ ...this.props.avatar });
  };

  render() {
    // console.log('object', changeAvatar());
    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Выбрать другой аватар</h2>
          </div>
          <div className={style.wrapperMain}>
            <ul className={style.list}>
              {avatars.map(avatar => (
                <li
                  key={avatar.id}
                  onClick={this.changeAvatar()}
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

// export default connect(null, mapDispatchToProps)(Avatar);
// const mapStateToProps = (state, { id }) => {
//   return {
//     contact: state.contacts.items.find((item) => item.id === id),
//   };
// };
