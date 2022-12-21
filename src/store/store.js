import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { getCategories } from "../features/categories/categoriesSlice";
// Root reducer

// const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
