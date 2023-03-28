import { configureStore } from "@reduxjs/toolkit";

import firstNameReducer from "./firstName";
import lastNameReducer from "./lastName";
import tokenReducer from "./token";

const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
  }
})

export default store;