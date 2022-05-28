import React, { useRef } from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DEV_KEY } from './../../constants/dev-key';
import {
  FormContainer,
  FormGroup,
  InputGroup,
  Label,
  InputWrap,
  BtnGroup,
  FormBtn,
  Input,
} from './style';

const { default_api_url } = DEV_KEY;

const CreateVoca = () => {
  const inputRef = useRef('');
  const [isFetch, setIsFetch] = useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(
    async data => {
      setIsFetch(false);
      const res = await axios.post(`${default_api_url}/vocas`, data);
      setIsFetch(true);

      if (res) {
        setIsFetch(false);
        navigate('/', { replace: true });
      } else {
        alert('저장하는데 실패했습니다.');
      }
      console.log(res);
    },

    [navigate],
  );

  // http://localhost:5002/vocas
  const onCreateVoca = e => {
    e.preventDefault();
    const vocaName = {
      voca: inputRef.current.value,
    };
    console.log('단어장 추가합니다.', vocaName);
    fetchData(vocaName);
  };

  return (
    <>
      {
        <FormContainer>
          <h2>단어장 추가하기</h2>
          <FormGroup onSubmit={onCreateVoca}>
            <InputGroup>
              <Label>단어장</Label>
              <InputWrap>
                <Input type="text" autoComplete="off" ref={inputRef} />
              </InputWrap>
            </InputGroup>
            <BtnGroup>
              <FormBtn type="button" onClick={e => navigate(-1)}>
                이전
              </FormBtn>
              <FormBtn type="submit">등록</FormBtn>
            </BtnGroup>
          </FormGroup>
        </FormContainer>
      }
    </>
  );
};

export default CreateVoca;
