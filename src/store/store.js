import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const middlewares = [
  thunk,
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const persisitedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persisitedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
