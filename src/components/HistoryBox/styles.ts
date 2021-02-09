import styled from "styled-components";

interface ILegendProps {
  background: string;
}

export const Container = styled.div`
  width: 100%;
  height: 340px;
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  margin: 10px 0;
  padding: 20px 20px 80px 20px;
  border-radius: 7px;
`;

export const TitleContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;
`;

export const LegendContainer  = styled.ul`

`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  > div {
    background: ${props => props.background};
    padding: .5rem;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    margin-right: 7px;
  }
`;
