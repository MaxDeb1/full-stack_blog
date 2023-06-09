import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface currentUserType {
  user: string;
}
interface CurrentUserContextType {
  currentUser: currentUserType | null
  login: (inputs: string) => Promise<void>
  logout: () => Promise<void>
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<CurrentUserContextType | null>(null);

export const AuthContexProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<currentUserType | null>(
    () => {
      const localData = localStorage.getItem("user");
      return localData ? JSON.parse(localData) : null;
    }
  );

  const login = async (inputs: string) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
