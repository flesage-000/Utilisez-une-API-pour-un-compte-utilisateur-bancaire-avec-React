import React from "react";

import Nav from "../Components/Header";
import Footer from "../Components/Footer";

const Signin = () => {
  const login = (event) => {
    event.preventDefault()

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Required forms aren't fill.
    if (!userName || !password) return;

    const rememberMe = document.getElementById('remember-me').checked;

    console.log("login", userName, password, rememberMe)
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
                      id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input  type="password"
                      id="password" />
            </div>
            <div className="input-remember">
              <input  type="checkbox"
                      id="remember-me" />
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