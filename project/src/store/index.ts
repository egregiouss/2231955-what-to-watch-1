import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
import {api} from "../api/api";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
