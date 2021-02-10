import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 15px;
  border-radius: 5px;
  background: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  transition: opacity .3s;

  &:hover {
    opacity: .7;
  }
`;
