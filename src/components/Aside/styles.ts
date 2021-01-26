import styled from 'styled-components';


export const Container = styled.div`
  grid-area: AS;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 0 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  margin-bottom: 30px
`;

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuIntemLink = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  transition: .3s;
  margin: 7px 0;
  display: flex;
  align-items: center;

  &:hover {
    opacity: .7;
  }

  > svg {
    margin-right: 7px;
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  margin-left: 10px;
`;
