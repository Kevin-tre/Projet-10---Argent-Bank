import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../../components/account/Account";
import dataAccount from "../../components/account/accountdata";
import { updateUser } from "../../redux/action";
import "./user.css";

const User = () => {
  const dispatch = useDispatch();
  const { user, token, updateUserLoading } = useSelector((state) => state.user);
  const [toggleForm, setToggleForm] = useState(false);
  const [userName, setUserName] = useState(user.userName);

  const onUpdateUser = (e) => {
    e.preventDefault();
    let body = { userName };
    updateUser(token, body, dispatch);
  };

  return (
    <div className="main-container">
      <div className="name">
        <h1>
          Welcome back <br /> {user.firstName} {user.lastName}
        </h1>
      </div>
      <div className="edit-form">
        {toggleForm ? (
          <form onSubmit={onUpdateUser}>
            <div className="form-div">
              <label htmlFor="username">User name:</label>
              <input
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                 className="input-form"
              />
            </div>
            <div className="form-div">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                value={user.firstName}
                disabled
                readOnly
                 className="input-form"
              />
            </div>
            <div className="form-div">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                value={user.lastName}
                disabled
                readOnly
                 className="input-form"
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                className={updateUserLoading ? "my-button-disable" : "my-button"}
                disabled={updateUserLoading}
              >
                Save
              </button>
              <button
                type="button"
                className="my-button"
                onClick={() => setToggleForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button className="my-button" onClick={() => setToggleForm(true)}>
            Edit Name
          </button>
        )}
      </div>
      <div>
        {dataAccount.map((DataAccount, index) => (
          <Account
            key={index}
            accountTitle={DataAccount.accountTitle}
            accountTotal={DataAccount.accountTotal}
            accountDescription={DataAccount.accountDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default User;