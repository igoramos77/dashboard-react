import styled from 'styled-components';


export const Container = styled.div`
  grid-area: MH;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
`;


export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h4`
  color: ${props => props.theme.colors.white};
`;

export const UserName = styled.span`
  color: ${props => props.theme.colors.white};
`;
