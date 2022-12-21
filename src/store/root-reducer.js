import { combineReducers } from "redux";

import userReducer from "../features/user/userSlice";
import basketReducer from "../features/basket/basketSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
export const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
  category: categoriesReducer,
});
