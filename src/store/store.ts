import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import mainReducer from "./mainReducer";

const reducers = combineReducers({ chartReducer: mainReducer });

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
