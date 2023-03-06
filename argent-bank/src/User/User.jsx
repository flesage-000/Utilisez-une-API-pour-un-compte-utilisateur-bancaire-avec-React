import React, { useState } from "react";
import { useDispatch, useEffect, useSelector } from "react-redux";

import { getFirstName } from "../_Services/firstName";
import { getLastName } from "../_Services/lastName";
import { getToken } from "../_Services/token";
import { setProfile } from "../_Services/user";

import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const User = () => {
  const [editionName, setEditionName] = useState(false);
  const firstName = useSelector((state) => state.firstName.value);
  const [firstNameEdit, setFirstNameEdit] = useState(firstName);
  const lastName = useSelector((state) => state.lastName.value);
  const [lastNameEdit, setLastNameEdit] = useState(lastName);
  const token = useSelector((state) => state.token.value);

  const editName = () => { setEditionName(true); }
  const editProfileCancel = () => { setEditionName(false); }

  const dispatch = useDispatch();
  const editProfileSave = () => {
    if (firstNameEdit || lastNameEdit) {
      setProfile(token, firstNameEdit, lastNameEdit);
      dispatch(getFirstName(firstNameEdit))
      dispatch(getLastName(lastNameEdit))
    }
  }

  return(
    <>

      <Nav />

      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back{ !editionName && <><br />{firstName} {lastName}!</>}</h1>
          { !editionName &&
            <button className="edit-button"
                    onClick={editName}>Edit Name</button>
          }
          { editionName &&
            <>
              <form>
                <div  className="input-wrapper">
                  <input  type="text"
                          id="firstName"
                          onChange={e => setFirstNameEdit(e.target.value)}
                          required
                          placeholder={firstName} />
                  <input  type="text"
                          id="lastName"
                          onChange={e => setLastNameEdit(e.target.value)}
                          required
                          placeholder={lastName} />
                </div>
                <div  className="input-wrapper">
                  <button className="save-button"
                          onClick={editProfileSave}>Save</button>
                  <button className="cancel-button"
                          onClick={editProfileCancel}>Cancel</button>
                </div>
              </form>
            </>
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