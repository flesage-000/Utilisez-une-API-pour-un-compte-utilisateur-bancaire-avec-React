import React from "react";
import { NavLink } from "react-router-dom";

import argentBankLogo from "./../../Assets/images/argentBankLogo.png";

const Nav = () => {
  return (
    <>
      <nav className="main-nav">
        <NavLink  className="main-nav-logo"
                  to="/"><img className="main-nav-logo-image"
                                  src={argentBankLogo}
                                  alt="Argent Bank Logo"  /><h1 className="sr-only">Argent Bank</h1></NavLink>
        <div>
          <NavLink  className="main-nav-item"
                    to="/Signin"><i className="fa fa-user-circle"></i>Sign In</NavLink>
          <NavLink  className="main-nav-item"
                    to="/User"><i className="fa fa-user-circle"></i>Tony</NavLink>
          <NavLink  className="main-nav-item"
                    href="./index.html"><i className="fa fa-sign-out"></i>Sign Out</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav;