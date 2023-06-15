import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface currentUserType {
  username: string;
  img: string;
}
interface CurrentUserContextType {
  currentUser: currentUserType | null
  login: (inputs: {username: string, password: string}) => Promise<void>
  logout: () => Promise<void>
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<CurrentUserContextType>({} as CurrentUserContextType);

export const AuthContexProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<currentUserType | null>(
    () => {
      const localData = localStorage.getItem("user");
      return localData ? JSON.parse(localData) : null;
    }
  );

  const login = async (inputs: {username: string, password: string}) => {
    const res = await axios.post("api/auth/login", inputs);
    setCurrentUser(res.data);
    console.log(res);
  };

  const logout = async () => {
    await axios.post("api/auth/logout");
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
