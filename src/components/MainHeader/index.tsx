import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';


const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice];
  }, []);
  return(
      <Container>
          <Toggle />
          <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <UserName>Igor Brown</UserName>
          </Profile>
      </Container>
  );
}

export default MainHeader;
