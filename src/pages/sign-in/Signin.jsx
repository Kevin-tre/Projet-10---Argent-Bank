import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/action';
import "./signin.css";

const Signin = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const body = {email,password}
    
    
    loginUser(body, dispatch)
  }
    return (
      <div className='main-container'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type='submit'>Sign In</button>
          </form>
        </section>
      </div>
    );
  };
  
  export default Signin;