import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding: 1.2rem 2rem;
  border-bottom: 1px solid rgba(177, 176, 176, 0.5);

  span {
    font-size: 23px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;

  li {
    margin: 1.5rem 1.3rem;
  }

  a {
    display: inline-block;
    padding: 8px;
  }
`;
