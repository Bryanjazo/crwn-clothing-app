import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "../../context/UserContext";
export const seCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
