import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
// as the actual value you want to acccess
export const UserContext = createContext({
  currentUser: null,
  seCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, seCurrentUser] = useState(null);
  const value = { currentUser, seCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      seCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}|</UserContext.Provider>;
};
