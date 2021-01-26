import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.main`

`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    background: none;
    margin: 0 10px;
    transition: opacity .3s;
    opacity: .4;

    &:hover {
      opacity: 1;
    }
  }

  .recurrent::after {
      content: '';
      display: block;
      width: 100%;
      margin: 0 auto;
      border-bottom: 5px solid ${props => props.theme.colors.success};
    }

  .eventual::after {
      content: '';
      display: block;
      width: 100%;
      margin: 0 auto;
      border-bottom: 5px solid ${props => props.theme.colors.warning};
    }

    .tag-actived {
      opacity: 1;
    }

`;
