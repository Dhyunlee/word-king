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