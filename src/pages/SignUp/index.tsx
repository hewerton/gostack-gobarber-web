import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';

const SignIn: React.FC = () => (
  <S.Container>
    <S.Background />
    <S.Content>
      <img src={logoImg} alt="GoBarber Logo" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
        <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button>Cadastrar</Button>
      </form>
      <a href="new">
        <FiArrowLeft />
        Voltar para login
      </a>
    </S.Content>
  </S.Container>
);

export default SignIn;
