// import React from "react";
import { createStore } from "redux";

// State
const initialState = {
  signedIn: false,
};

// Action creator
export const signedIn = (actionType) => ({type: actionType})

// Logic
function reducer(state, action) {console.log("reducer", state, action);
  if (action.type == 'signIn') {
    return {
      ...state,
      signedIn: action.type,
    }
  }
}

export const store = createStore(reducer, initialState);