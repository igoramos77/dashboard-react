import styled from 'styled-components';

interface IContainerProps {
  background: string;
}

export const Container = styled.div<IContainerProps>`
  background: ${props => props.background};
  width:  32%;
  height: 200px;
  display: block;
  border-radius: 7px;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  > label {
    color: ${props => props.theme.colors.white};
    display: block;
    font-size: 1.5rem;
  }

  > h3 {
    color: ${props => props.theme.colors.white};
    font-size: 2.5rem;
    position: relative;
    z-index: 9;
  }

  > p {
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    position: absolute;
    bottom: 1rem;
  }

  > img {
    position: absolute;
    top: -10px;
    right: -20px;
    opacity: .4;
    height: 110%;
  }
`;


