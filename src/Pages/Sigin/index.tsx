import React, { useState } from 'react';

import { Container, Logo, Form, FormTitle } from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

const SigIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } =  useAuth();

    return(
        <Container>
          <Logo>
            <img src={logoImg} alt="Logo Minha Carteira"/>
            <h2>Minha Carteira</h2>
          </Logo>
          <Form method="POST" onSubmit={() => signIn(email, password) }>
            <FormTitle>Entrar</FormTitle>
            <Input
              type="email"
              name="user"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
            type="password"
            name="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
            required
            />

            <Button type="submit">Acessar</Button>
          </Form>

        </Container>
    );
}

export default SigIn;
