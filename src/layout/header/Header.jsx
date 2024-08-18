import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/argentBankLogo.png"
import "./header.css"

const Header = () => {
  return (
    <header>
       <Link className='main-nav-logo'  to={"/"}>
        <img className="logo" src={Logo} alt="Argent Bank logo" />
      </Link>
      <nav>
        <i className="fa fa-circle-user login-link--icon "></i>
        <Link className="login-link" to="/signin">
        <p className='text-sign-in'>Sign in</p>
        </Link>
        
      </nav>
    </header>
  );
};

export default Header