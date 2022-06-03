import styled from '@emotion/styled';

export const WordItemStyle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 8px;
  border: 1px solid #dfdede;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;

  & dl {
    width: 90%;
    margin-left: 1.2rem;
    display: flex;
  }
  & dd {
    height: 27px;
    margin-left: 20px;
  }
`;

export const HeadText = styled.dt`
  font-size: 22px;
`;
export const ContextText = styled.dd`
  height: 27px;
  margin-left: 20px;
  line-height: 29px;
`;

export const VocalContainer = styled.span`
  position: relative;
  top: 3px;
  left: 8px;
  line-height: 29px;
  display: inline;
  font-size: 18px;
  color: #9b938a;
  cursor: pointer;
`;
export const ViewMening = styled.button`
  width: 160px;
  background: #dad8d8;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 15%);
  color: #636363;
  font-weight: bold;
  font-size: 16px;
  border-radius: 3px;
`;
export const DelBtn = styled.button`
  position: relative;
  left: 3px;
  top: -3px;
  display: inline-block;
  width: 60px;
  background: transparent;
  color: #dfa764;
  font-size: 18px;
`;
