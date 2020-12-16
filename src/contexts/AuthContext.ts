import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({ name: '' });

export default AuthContext;
