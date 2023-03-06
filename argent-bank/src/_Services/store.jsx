import { configureStore } from "@reduxjs/toolkit";

import firstNameReducer from "./firstname";
import tokenReducer from "./token";

const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    token: tokenReducer,
  }
})

export default store;