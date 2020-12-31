import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');

    addToast({
      type: 'sucess',
      title: 'Log out realizado com sucesso',
    });
  }, [signOut, addToast, history]);

  return (
    <>
      <h1>Dashboard</h1>
      <Button type="button" onClick={handleSignOut}>
        Sair
      </Button>
    </>
  );
};

export default Dashboard;
