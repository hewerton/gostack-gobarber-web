import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AuthContext from './contexts/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Hewerton' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
