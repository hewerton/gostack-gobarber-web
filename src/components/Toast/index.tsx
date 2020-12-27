import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import * as S from './styles';

const Toast: React.FC = () => {
  return (
    <S.Container>
      <S.Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="sucess" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>
    </S.Container>
  );
};

export default Toast;
