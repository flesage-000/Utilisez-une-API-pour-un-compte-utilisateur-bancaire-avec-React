import React, { useState } from "react";

import { getLogin } from "../_Services/user";
import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const StoreLoginData = (data) => { console.log("storeLoginData", data, rememberMe);
    // Tutorial => https://usehooks.com/useLocalStorage/
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return JSON.parse(item);
      } catch(error) {
        // If error also return initialeValue
        console.log("error", error)
      }
    })
  }

  const login = (event) => {
    event.preventDefault()

    // Required forms aren't fill.
    if (!userName || !password) return;

    const loginStatus = getLogin({'email': userName, 'password': password});
    loginStatus.then(obj => {
      if (obj.status == 200) {
        console.log("Connecté !")
        // StoreLoginData(obj);
      } else {
        console.log("Pas connecté !")
      }
    })
  }

  return (
    <>

      <Nav />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form>

            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input  type="text"
                      id="username"
                      onInput={e => setUserName(e.target.value)}
                      required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input  type="password"
                      id="password"
                      onInput={e => setPassword(e.target.value)}
                      required />
            </div>
            <div className="input-remember">
              <input  type="checkbox"
                      id="remember-me"
                      onChange={e => setRememberMe(e.target.checked)} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button"
                    onClick={login}>Sign In</button>

          </form>

        </section>
      </main>

      <Footer />

    </>
  )
}

export default Signin;