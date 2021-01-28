import styled from "styled-components";

interface ILegendProps {
  background: string;
}

export const Container = styled.div`
  width: 50%;
  height: 260px;
  margin: 10px 0 10px 0;
  border-radius: 7px;
  display: flex;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  box-sizing: border-box;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
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
    height: 40px;
    width: 40px;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    margin-right: 7px;
  }
`;

export const SideRight = styled.main`

`;
