import React from 'react'
import Account from '../../components/account/Account'
import dataAccount from '../../components/account/accountdata'
import "./user.css"

const User = () => {
  return (
   <div className='main-container'>
    <div className='name'>
        <h1>Welcome back <br /> Tony Jarvis</h1>
        <button className='edit-button'>Edit Name</button>
    </div>
    <div>
        {dataAccount.map((DataAccount, index) => (
        <Account
        key={index}
        accountTitle={DataAccount.accountTitle}
        accountTotal={DataAccount.accountTotal}
        accountDescription={DataAccount.accountDescription}/>
    ))}
    </div>
    </div> 
  )
}

export default User