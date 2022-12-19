import { combineReducers } from "redux";

import userReducer from "../features/user/userSlice";
import basketReducer from "../features/basket/basketSlice";
export const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});
