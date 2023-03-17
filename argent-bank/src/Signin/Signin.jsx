import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { getLogin } from "../_Services/user";
import { getToken } from "../_Services/token";
import Nav from "../Components/Header";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  // For easy write/read script
  const ls = localStorage;
  const loginAuto = ls.getItem("rememberMe") || false;
  const [loginStatus, setLoginStatus] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const token = useSelector((state) => state.token.value);

  const parseJwt = (token) => {
    // Tutorial => https://www.bezkoder.com/handle-jwt-token-expiration-react/
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  /**
   * login function
   */
  const login = () => {
    const loginPromise = getLogin({'email': email, 'password': password});
    loginPromise.then(obj => {
      if (obj.status === 200) {
        setLoginStatus(obj.status);
        loginSet(obj.token);
      } else {
        console.Warn("Erreur lors de la connection !")
      }
    })
  }
  /**
   * When user use login form
   * @param {object} event
   * @returns
   */
  const loginForm = (event) => { console.log("event", typeof event)
    event.preventDefault()
    // Required forms aren't fill.
    if (!email || !password) return;

    login();
  }
  /**
   * Set login localStorage
   */
  const setLocalStorage = (token) => { console.log("setLocalStorage", token, rememberMe, email, password)
    // Clear localStorage
    ls.clear();
    // Set localStorage
    ls.setItem("token", token);
    ls.setItem('token_expiration', parseJwt(token).exp);
    ls.setItem("rememberMe", rememberMe)
    if (rememberMe) {
      ls.setItem("email", email);
      ls.setItem("password", password);
    }
  }
  const dispatch = useDispatch();
  /**
   * When login informations are OK, we add them to redux and localStorage
   * @param {string} token
   */
  const loginSet = (token) => { console.log("loginSet::token", token, typeof token)
    setLocalStorage(token);
    dispatch(getToken(token));
  }

  // If user already connected
  if (token !== null || loginStatus === 200 || (ls.getItem("token") !== null && ls.getItem("token") === token)) return <Navigate to="/User" />
  // If user ask "rememberMe"
  if (ls.getItem("rememberMe") === true) login();

  return (
    <>

      <Nav />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          { loginAuto === "true" &&
            <p>
              Automatic login in progress, please wait.
            </p>
          }
          { loginAuto === "false" &&
            <form>

              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input  type="text"
                        id="email"
                        onInput={e => setEmail(e.target.value)}
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
                      onClick={loginForm}>Sign In</button>

            </form>
          }

        </section>
      </main>

      <Footer />

    </>
  )
}

export default Signin;