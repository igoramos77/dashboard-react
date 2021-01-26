import styled from 'styled-components';



export const Container = styled.div`
  grid-area: CT;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 30px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background: ${props => props.theme.colors.tertiary};
  }
`;
