import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';
import * as S from './styles';

interface InnerToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiXCircle size={20} />,
  sucess: <FiCheckCircle size={20} />,
};

const InnerToast: React.FC<InnerToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message]);

  return (
    <S.Toast type={message.type} hasDescription={!!message.message}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.message && <p>{message.message}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </S.Toast>
  );
};

export default InnerToast;
