import React from 'react'
import "./account.css"

const Account = ({accountTitle,accountTotal,accountDescription}) => {
  return (
    <div className='account'>
        <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountTotal}</p>
        <p className="account-amount-description">{accountDescription}</p>
    </div>
    <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
  </div>
  )
}

export default Account