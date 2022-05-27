import styled from '@emotion/styled';

export const FormContainer = styled.div`
  margin: 0.7rem auto;
  width: 75%;
  padding: 1.2rem 2.5rem;
`;

export const FormGroup = styled.form`
  width: 65%;
  min-width: 575px;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 8rem auto;
  padding: 1rem 3rem;
`;

export const InputGroup = styled.div`
  width: 325px;
  height: 30px;
  margin: 20px auto;
  border: 1px solid gray;
  border-right: none;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  flex: 18px;
`;

export const SelectLabel = styled.label`
  flex: 18px;
`;

export const InputWrap = styled.div`
  height: inherit;
`;

export const Input = styled.input`
  padding-left: 5px;
  outline: none;
  height: inherit;
  font-size: 18px;
`;
export const Select = styled.select`
  flex: 3;
  height: inherit;
  font-size: 16px;
  outline: none;
`;

export const BtnGroup = styled.div`
  margin-top: 2rem;
  text-align: center;

  & > button:hover {
    opacity: 0.8;
  }
`;

export const FormBtn = styled.button`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  background: bisque;

  &:hover {
    opacity: 0.8;
  }
  & + & {
    margin: 10px;
  }
`;
