"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const initialdata = {
  email: "",
  exp: 0,
  iat: 0,
  id: "",
  isAdmin: false,
  username: "",
};

export interface User {
  email: string;
  exp: number;
  iat: number;
  id: string;
  isAdmin: boolean;
  username: string;
}

interface contextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<contextProps>({
  user: {
    email: "",
    exp: 0,
    iat: 0,
    id: "",
    isAdmin: false,
    username: "",
  },
  setUser: () => {},
});

export const AuthcontextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(initialdata);
  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
