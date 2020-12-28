import React from 'react';

import { ToastMessage } from '../../hooks/ToastContext';
import InnerToast from './InnerToast';

import * as S from './styles';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  return (
    <S.Container>
      {messages.map(message => (
        <InnerToast key={message.id} message={message} />
      ))}
    </S.Container>
  );
};

export default Toast;
