import { createContext, useState, useEffect } from "react";
import {
  onAuth_StateChangedListener,
  create_UserDocumentFromAuth,
} from "../Utils/Firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    const unsubscribe = onAuth_StateChangedListener((user) => {
      if (user) {
        create_UserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
