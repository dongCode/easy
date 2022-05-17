import { createContext, useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

export const fakeAuthProvider = {
  isAuthenticated: false,
  login(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  logout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export interface AuthContextType {
  user: any;
  login: (user: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let login = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.login(() => {
      setUser(newUser);
      callback();
    });
  };

  let logout = (callback: VoidFunction) => {
    return fakeAuthProvider.logout(() => {
      setUser(null);
      callback();
    });
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
