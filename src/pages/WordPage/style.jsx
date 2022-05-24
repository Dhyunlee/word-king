import styled from '@emotion/styled';

export const WordItemContainer = styled.section`
  width: 70%;
  min-width: 420px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem 0;
`;

export const HeaderTitle = styled.header`
  border-left: 3px solid #d3d3d3;
  padding-left: 10px;
  margin: 2rem 1.7rem 3rem;
`;

export const WordSortMenu = styled.ul`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WordSort = styled.select`
  margin-left: 1.2em;
`;

export const ViewWord = styled.button`
  background: #dad8d8;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 15%);
  color: #636363;
  font-weight: bold;
  font-size: 16px;
  border-radius: 3px;
`;

export const WordList = styled.div`
  margin: 40px auto;
  width: 95%;
`;
export const WordAert = styled.div`
  margin: 2rem auto;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 5px;
  padding: 4.5rem;
  transition: border 0.5s;

  &:hover {
    border: 1px solid rgba(128, 128, 128, 0.8);
  }

  & p {
    font-size: 20px;
    color: pink;
  }
`;
export const ToggleBtnContainer = styled.div`
  width: 89px;
  height: 80px;
  position: fixed;
  right: 40px;
  bottom: 30px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 50%;
  & > button {
    width: 92px;
    font-size: 16px;
    font-weight: 600;
    transform: translate(-2px, 25px);
    background: transparent;
  }
`;
