import { axios } from '@/lib/axios';
import { createContext, useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

export interface AuthContextType {
  user: any;
  login: (user: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let login = async (newUser: string, callback: VoidFunction) => {
    const res = await axios.post('/login', newUser);
    setUser(newUser);
    console.log(res);
  };

  let logout = async (callback: VoidFunction) => {
    const res = await axios.post('/logout');
    setUser(null);
    console.log(res);
    callback();
  };

  let value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
