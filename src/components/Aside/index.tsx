import React from 'react';
import { Container, Header, MenuContainer, LogoImg, MenuIntemLink, Title } from './styles';

import { GoDashboard, GoArrowUp, GoArrowDown, GoSignOut } from 'react-icons/go';

import srcImgLogo from '../../assets/logo.svg';


const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
              <LogoImg src={srcImgLogo} alt="Logo Minha Carteira" />
              <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
              <MenuIntemLink href="/dashboard"><GoDashboard /> Dashboard</MenuIntemLink>
              <MenuIntemLink href="/list/entry-balance"><GoArrowUp /> Entradas</MenuIntemLink>
              <MenuIntemLink href="/list/exit-balance"><GoArrowDown /> Saídas</MenuIntemLink>
              <MenuIntemLink href=""><GoSignOut /> Sair</MenuIntemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;
