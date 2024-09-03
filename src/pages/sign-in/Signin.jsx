import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/action';
import { loginUserFailed } from '../../redux/reducer';
import "./signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const {error, userLoading} = useSelector(state => state.user); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = { email, password, rememberMe };

    if (!email || !password) {
      dispatch(loginUserFailed()); 
    }

    loginUser(body, dispatch);
  };

  return (
    <div className='main-container'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input 
              type="text" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {error && <p className="message-error">{error}</p>} 
          <div className="input-remember">
            <input type="checkbox" id="remember-me" value={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={userLoading?"my-button-disable":"my-button"} type='submit' disabled={userLoading}>Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default Signin;