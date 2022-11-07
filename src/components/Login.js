import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/userSlice';
import './Login.css';

const Login = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChangeHandel = (e) => {
    const targetName = e.target.name;
    const inputValue = e.target.value;
    if (targetName === 'name') setName(inputValue);
    else if (targetName === 'email') setEmail(inputValue);
    else if (targetName === 'password') setPassword(inputValue);
  };

  const dispatch = useDispatch();

  const submitLoginHandel = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        isLoggedIn: true,
      })
    );
  };

  useEffect(() => console.log(name, email, password), [name, email, password]);

  return (
    <div className='login'>
      <form
        action=''
        className='login__form'
        onSubmit={(e) => submitLoginHandel(e)}
      >
        <h1>Login Here 👨‍💻 </h1>
        <input
          type='text'
          name='name'
          id='userNameInput'
          placeholder='Name'
          value={name}
          onChange={onInputChangeHandel}
        />
        <input
          type='email'
          name='email'
          id='userEmailInput'
          placeholder='Email'
          value={email}
          onChange={onInputChangeHandel}
        />
        <input
          type='Password'
          name='password'
          id='userPasswordInput'
          placeholder='Password'
          value={password}
          onChange={onInputChangeHandel}
        />
        <button type='submit' className='submit__btn'>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
