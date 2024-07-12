// AuthContext.js
import React, { createContext, useState , useContext} from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleAuth = () => {
    setSignedIn(!signedIn);
};

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn ,toggleAuth , setUser , user}}>
      {children}
    </AuthContext.Provider>
  );
};
