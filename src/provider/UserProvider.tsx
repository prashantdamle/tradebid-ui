import React, { useState } from "react";
import { User } from "../types/model";

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContextInitialValue: UserContextType = {
  user: null,
  setUser: () => {},
};

export const UserContext = React.createContext<UserContextType>(
  UserContextInitialValue
);

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  const setUser = (user: User) => {
    setUserData(user);
  };

  return (
    <UserContext.Provider value={{ user: userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
