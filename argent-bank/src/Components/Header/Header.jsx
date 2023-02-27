import React from "react";

import argentBankLogo from "./../../Assets/images/argentBankLogo.png";

const Nav = () => {
  return (
    <>
      <nav class="main-nav">
        <a  class="main-nav-logo"
            href="./index.html"><img  class="main-nav-logo-image"
                                      src={argentBankLogo}
                                      alt="Argent Bank Logo"  /><h1 class="sr-only">Argent Bank</h1></a>
        <div>
          <a  class="main-nav-item"
              href="./sign-in.html"><i class="fa fa-user-circle"></i>Sign In</a>
          <a  class="main-nav-item"
              href="./user.html"><i class="fa fa-user-circle"></i>Tony</a>
          <a  class="main-nav-item"
              href="./index.html"><i class="fa fa-sign-out"></i>Sign Out</a>
        </div>
      </nav>
    </>
  )
}

export default Nav;