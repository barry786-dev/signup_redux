import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../app/features/userSlice';
import './Logout.css';

const Logout = () => {

const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className='logout'>
      <h1>
        you are Welcome :<span className='user__name'> {user.name}</span>
      </h1>
      <button className='logout__btn' onClick={logoutHandler}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
