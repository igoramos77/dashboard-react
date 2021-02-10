import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    color: ${props => props.theme.colors.white};
    margin-left: 7px;
  }

  >img {
    width: 40px;
    height: 40px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 7px;
  background: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.colors.white};

  &::after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 5px solid ${props => props.theme.colors.warning};
    margin-bottom: 25px;
  }
`;
