import React from 'react';
import Profile from '../components/Profile/Profile';
import style from '../components/Profile/Profile.module.css';

const ProfilePage = () => {
  return (
    <div className={style.container}>
      <Profile />
    </div>
  );
};

export default ProfilePage;
