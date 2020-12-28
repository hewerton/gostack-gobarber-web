import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Toast from '../components/Toast';

interface ToastContextData {
  addToast(toastMessage: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'info' | 'sucess' | 'error';
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, message, type }: Omit<ToastMessage, 'id'>) => {
      const toastMessage = {
        id: uuid(),
        message,
        type,
        title,
      };

      setMessages(state => [...state, toastMessage]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToas must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
