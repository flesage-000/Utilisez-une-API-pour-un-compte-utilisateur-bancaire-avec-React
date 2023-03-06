import React, { useState } from "react";

import { getLogin } from "../_Services/user";
import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const parseJwt = (token) => {
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

    const loginStatus = getLogin({'email': email, 'password': password});
    loginStatus.then(obj => {
      if (obj.status == 200) { console.log("obj", obj, parseJwt(obj.token));
        localStorage.setItem('email', email);
        localStorage.setItem('token', obj.token);
        localStorage.setItem('token_expiration', parseJwt(obj.token));
        localStorage.setItem('rememberMe', rememberMe);
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