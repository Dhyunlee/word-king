import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  FormGroup,
  InputGroup,
  Label,
  InputWrap,
  Input,
  Select,
  BtnGroup,
  FormBtn,
} from './../CreateVoca/style';

import { DEV_KEY } from './../../constants/dev-key';
const { default_api_url } = DEV_KEY;

const CreateWord = () => {
  const [vocas, setVocas] = useState([]);
  console.log(vocas);
  const [inputs, setInputs] = useState({
    word: '',
    meaning: '',
    vocaName: vocas && vocas[0],
  });
  const { word, meaning, vocaName } = inputs;

  const [isFetch, setIsFetch] = useState(false);
  const navigate = useNavigate();

  const getFetchData = useCallback(async () => {
    const { data } = await axios.get(`${default_api_url}/vocas`);
    setVocas(data);
  }, []);

  const postFetchData = useCallback(
    async data => {
      setIsFetch(false);
      const res = await axios.post(`${default_api_url}/words`, data);
      setIsFetch(true);

      if (res) {
        setIsFetch(false);
        // history.push('/');
        navigate('/', { replace: true });
      } else {
        alert('저장하는데 실패했습니다.');
      }
    },
    [navigate],
  );

  const changeInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    getFetchData();
  }, [getFetchData]);

  // http://localhost:5002/vocas
  const onAddWord = e => {
    e.preventDefault();
    console.log({ word, meaning });
    if (word && meaning) {
      const wordData = {
        voca: vocaName,
        word,
        meaning,
        isDone: false,
      };
      postFetchData(wordData);
    } else {
      alert('단어 또는 뜻을 입력하세요!');
    }
  };

  return (
    <FormContainer>
      <h2>단어 추가하기</h2>
      <FormGroup onSubmit={onAddWord}>
        <InputGroup>
          <Label>단어</Label>
          <InputWrap>
            <Input
              type="text"
              name="word"
              autoComplete="off"
              value={word}
              onChange={changeInput}
            />
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <Label>뜻</Label>
          <InputWrap>
            <Input
              type="text"
              name="meaning"
              autoComplete="off"
              value={meaning}
              onChange={changeInput}
            />
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <Label flexSize="1 48px">단어장</Label>
          <Select
            type="text"
            name="vocaName"
            value={vocaName}
            onChange={changeInput}
          >
            {vocas.map(({ voca, id }) => (
              <option key={id} value={voca}>
                {voca}
              </option>
            ))}
          </Select>
        </InputGroup>
        <BtnGroup>
          <FormBtn
            type="button"
            // onClick={e => history.goBack()}
            onClick={e => navigate(-1)}
          >
            이전
          </FormBtn>
          <FormBtn type="submit">등록</FormBtn>
        </BtnGroup>
      </FormGroup>
    </FormContainer>
  );
};

export default CreateWord;
