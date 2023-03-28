import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getToken } from "../_Services/token";
import { getLoginFetch } from "../_Services/user";
import { getFirstName } from "../_Services/firstName";
import { getLastName } from "../_Services/lastName";

import argentBankLogo from "./../Assets/images/argentBankLogo.png";

const Nav = () => {
  const firstName = useSelector((state) => state.firstName.value);
  const token = useSelector((state) => state.token.value);
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      dispatch(getToken(localStorage.getItem("token")));
      const user = getLoginFetch(token);
      user.then(obj => {
        dispatch(getFirstName(obj.firstName));
        dispatch(getLastName(obj.lastName));
      })
    }
  });

  return (
    <>
      <nav className="main-nav">
        <NavLink  className="main-nav-logo"
                  to="/"><img className="main-nav-logo-image"
                                  src={argentBankLogo}
                                  alt="Argent Bank Logo"  /><h1 className="sr-only">Argent Bank</h1></NavLink>
        <div>
          { token === null && location !== "/SignIn" &&
            <>
              <NavLink  className="main-nav-item"
                        to="/SignIn"><i className="fa fa-user-circle"></i>Sign In</NavLink>
            </>
          }
          { token !== null &&
            <>
              <NavLink  className="main-nav-item"
                        to="/User"><i className="fa fa-user-circle"></i>{firstName}</NavLink>
              <NavLink  className="main-nav-item"
                        to="/SignOut"><i className="fa fa-sign-out"></i>Sign Out</NavLink>
            </>
          }
        </div>
      </nav>
    </>
  )
}

export default Nav;