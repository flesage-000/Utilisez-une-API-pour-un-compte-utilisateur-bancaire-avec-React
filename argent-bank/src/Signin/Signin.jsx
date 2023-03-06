import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { getLogin } from "../_Services/user";
import { getToken } from "../_Services/token";
import Nav from "../Components/Header";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
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

  const login = (event) => {
    event.preventDefault()

    // Required forms aren't fill.
    if (!email || !password) return;

    const login = getLogin({'email': email, 'password': password});
    login.then(obj => {
      if (obj.status === 200) {
        setLoginStatus(obj.status);
        addToken(obj.token);
      } else {
        console.log("Pas connecté !")
      }
    })
  }

  const dispatch = useDispatch();
  const addToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem('token_expiration', parseJwt(token).exp);
    localStorage.setItem("rememberMe", rememberMe)
    dispatch(getToken(token));
  }

  if (token !== null || loginStatus === 200 || token === localStorage.getItem("token")) return <Navigate to="/User" />

  return (
    <>

      <Nav />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

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
                    onClick={login}>Sign In</button>

          </form>

        </section>
      </main>

      <Footer />

    </>
  )
}

export default Signin;