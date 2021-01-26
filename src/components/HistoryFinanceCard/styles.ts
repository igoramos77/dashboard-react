import styled from "styled-components";


interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background: ${ props => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .25s;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div span {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Tag = styled.div<ITagProps>`
  background: ${props => props.color};
  position: absolute;
  width: 10px;
  height: 100%;
  left: -5px;
  border-radius:2px 0 0 2px;
`;
