import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import store from "./_Services/store"
import { Provider } from "react-redux";

import './index.css';

import Signin from './Signin/Signin';
import SignOut from './signOut/signOut';
import Home from './Home/Home';
import User from './User/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route  path="/"
                    element={<Home />} />
            <Route  path="/SignIn"
                    element={<Signin />} />
            <Route  path="/User"
                    element={<User />} />
            <Route  path="/SignOut"
                    element={<SignOut />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
