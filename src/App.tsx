import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthContextProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <SignIn />
      </AuthContextProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
