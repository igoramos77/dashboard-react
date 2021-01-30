import styled from "styled-components";

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
`;
