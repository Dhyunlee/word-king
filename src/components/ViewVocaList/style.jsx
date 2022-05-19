import styled from '@emotion/styled';

export const VocaList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const VocaItem = styled.li`
  position: relative;
  top: 0;
  left: 0;
  width: 190px;
  height: 80px;
  margin: 1rem 8px;
  border: 1px solid #dfdede;
  border-radius: 4px;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }

  & button {
    display: inline-block;
    margin-left: 8px;
    position: absolute;
    top: 0%;
    right: 0;
    background: transparent;
    color: #dfa764;
    font-size: 18px;
  }
`;
