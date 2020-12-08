import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <S.Container>
    {Icon && <Icon />}
    <input {...rest} />
  </S.Container>
);

export default Input;
