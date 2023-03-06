import React, { useState } from "react";
import { useEffect, useSelector } from "react-redux";

import { getlastName } from "../_Services/lastName";

import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const User = () => {
  const [editionName, setEditionName] = useState(false);
  const firstName = useSelector((state) => state.firstName.value);
  const lastName = useSelector((state) => state.lastName.value);
  const editName = () => {
    setEditionName(true);
  }
  const editNameCancel = () => {
    setEditionName(false);
  }

  return(
    <>

      <Nav />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          { editionName &&
            <>
              <form>
                <div  className="input-wrapper">
                  <input  type="text"
                          id="firstName"
                          placeholder={firstName}
                          required />
                  <input  type="text"
                          id="lastName"
                          placeholder={lastName}
                          required />
                </div>
                <div  className="input-wrapper">
                  <button className="save-button">Save</button>
                  <button className="cancel-button"
                          onClick={editNameCancel}>Cancel</button>
                </div>
              </form>
            </>
          }
          { !editionName &&
            <button className="edit-button"
                    onClick={editName}>Edit Name</button>
          }
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