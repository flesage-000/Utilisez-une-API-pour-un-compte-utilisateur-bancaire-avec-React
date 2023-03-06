import React from "react";
import { useEffect, useSelector } from "react-redux";

import { getlastName } from "../_Services/lastName";

import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const User = () => {
  const firstName = useSelector((state) => state.firstName.value);
  const lastName = useSelector((state) => state.lastName.value);

  return(
    <>

      <Nav />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">
              $2,082.79
            </p>
            <p className="account-amount-description">
              Available Balance
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">
              $10,928.42
            </p>
            <p className="account-amount-description">
              Available Balance
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">
              $184.30
            </p>
            <p className="account-amount-description">
              Current Balance
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      <Footer />

    </>
  )
}

export default User;