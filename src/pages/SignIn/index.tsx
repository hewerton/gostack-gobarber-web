import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';

const SignIn: React.FC = () => (
  <S.Container>
    <S.Content>
      <img src={logoImg} alt="GoBarber Logo" />

      <form action="">
        <h1>Faça seu logon</h1>

        <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button>Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="new">
        <FiLogIn />
        Criar conta
      </a>
    </S.Content>
    <S.Background />
  </S.Container>
);

export default SignIn;
