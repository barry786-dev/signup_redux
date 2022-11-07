import React, { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './app/features/userSlice';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');
  // const submitLogin = (name) => {
  //   setUserName(name);
  //   setIsLoggedIn(true);
  // };
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
