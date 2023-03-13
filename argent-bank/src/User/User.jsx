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
  const [changeProfileErrorMessage, setChangeProfileErrorMessage] = useState(false)
  const token = useSelector((state) => state.token.value);

  const editName = () => { setEditionName(true); }
  const editProfileCancel = () => { setEditionName(false); }

  const dispatch = useDispatch();
  const editProfileSave = async (event) => {
    event.preventDefault();
    if (firstNameEdit || lastNameEdit) {
      let newFirstName = '';
      firstNameEdit ? newFirstName = firstNameEdit : newFirstName = firstName;
      let newLastName = '';
      lastNameEdit ? newLastName = lastNameEdit : newLastName = lastName;

      const profile = await setProfile(token, newFirstName, newLastName);
      if (profile === 200) {
        dispatch(getFirstName(newFirstName));
        dispatch(getLastName(newLastName));
        // Remove edit profile form
        setEditionName(false);
        // In case of error message, set display of error message to false
        if (changeProfileErrorMessage) setChangeProfileErrorMessage(false);
      } else {
        // In case of error message, set display of error message to true
        setChangeProfileErrorMessage(true);
      }
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
                          placeholder={firstName} />
                  <input  type="text"
                          id="lastName"
                          onChange={e => setLastNameEdit(e.target.value)}
                          placeholder={lastName} />
                  { changeProfileErrorMessage &&
                    <small>Une erreur est survenue lors de la mise à jour de vos informations.</small>
                  }
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