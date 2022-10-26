import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = { displayName: 'Akash' };
  const authInfo = { user };
  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
