import styled from '@emotion/styled';

export const VocaNavContainer = styled.nav`
  width: 89px;
  height: 80px;
  position: fixed;
  right: 40px;
  bottom: 30px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 50%;
  & > button {
    position: absolute;
    top: 50%;
    font-size: 16px;
    font-weight: 600;
    transform: translateY(-50%);
    background: transparent;
  }
`;

export const VocaNav = styled.ul`
  border: none;
  padding: 6px;
  text-align: center;
  width: 98px;
  position: relative;
  right: 10px;
  bottom: 75px;
  border-radius: 5px;
  background: rgba(230, 220, 220, 0.8);
`;

export const MenuItem = styled.li`
  font-weight: 600;
  margin-top: 5px;
  &:hover {
    opacity: 0.6;
  }
`;
