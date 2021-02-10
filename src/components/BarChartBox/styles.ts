import styled from 'styled-components';

interface ILegendProps {
  background: string;
}

export const Container = styled.div`
  width: calc(50% - 2rem);
  display: flex;
  box-sizing: border-box;
  min-height: 260px;
  margin: 10px 0;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;
  flex-wrap: wrap;
  float: left;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 10px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 180px;
  overflow-y: scroll;
  padding-right: 15px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background: ${props => props.theme.colors.tertiary};
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  > div {
    background: ${props => props.background};
    padding: .35rem .5rem;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    margin-right: 7px;
  }
`;


export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`;
