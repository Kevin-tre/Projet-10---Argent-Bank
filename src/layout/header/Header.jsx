import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.webp";
import { logoutUserAction } from "../../redux/action";
import "./header.css";

const Header = () => {
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
 

  const logout = (e) => {
    e.preventDefault();
    logoutUserAction(dispatch);
  };

  return (
    <header>
      <Link className="main-nav-logo" to={"/"}>
        <img className="logo" src={Logo} alt="Argent Bank logo" />
      </Link>
      <nav>
        <div>
          {token ? (
            <div className="sign-container">
              <i className="fa fa-circle-user login-link--icon"></i>
              <Link className="login-link" to="/user">
                <p className="text-sign-in">
                   {user.userName ? user.userName : user.firstName}
                </p>
              </Link>

              <Link className="login-link" onClick={logout} to="/">
                <p className="text-sign-in">Sign out</p>
              </Link>
            </div>
          ) : (
            <div className="sign-container">
              <i className="fa fa-circle-user login-link--icon"></i>
              <Link className="login-link" to="/signin">
                <p className="text-sign-in">Sign in</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;


