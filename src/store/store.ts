import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import mainReducer from "./mainReducer";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const reducers = combineReducers({ chartReducer: mainReducer });

export const store = configureStore({
    reducer: reducers,
  })

const persistConfig = {
    key: 'root',
  storage,
};
//const reducers = combineReducers({ chartReducer: mainReducer });
// const persistedReducer = persistReducer(persistConfig, reducers);
// export const persistedStore= configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         //serializableCheck: false,
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export type RootState = ReturnType<typeof store.getState >;

export type AppDispatch = typeof store.dispatch;
//| typeof persistedStore.getState