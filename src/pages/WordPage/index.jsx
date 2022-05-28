import React, { useEffect, useState, useCallback } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import WordItem from '../../components/WordItem';
import { DEV_KEY } from './../../constants/dev-key';
import {
  WordItemContainer,
  HeaderTitle,
  WordSort,
  WordSortMenu,
  ViewWord,
  WordList,
  WordAert,
  ToggleBtnContainer,
} from './style';
const { default_api_url } = DEV_KEY;

const WordPage = () => {
  const [word, setWord] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onDelWord = useCallback(
    async ({ id: wordId }) => {
      if (window.confirm('단어를 삭제하실건가요?')) {
        console.log('삭제합니다.');

        await axios.delete(`${default_api_url}/words/${wordId}`);
        setWord({ id: 0 });
        navigate('/', { replace: true });
      }
    },
    [navigate],
  );
  /* 
    예시: http://localhost:3000/voca=수능기출단어 
     → location.search => ?name=수능기출단어
     → ignoreQueryPrefix: true, {name: 수능기출단어} 
  */
  const { name } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const asyncFetch = useCallback(async () => {
    setIsFetch(true);
    try {
      const { data } = await axios.get(`${default_api_url}/words?voca=${name}`);
      setWord(data);
      setIsFetch(false);
    } catch (err) {
      alert('서버에 에러가 발생했습니다.', err.message);
      console.error(err.message);
    }
  }, [name]);

  useEffect(() => {
    asyncFetch();
  }, [asyncFetch]);

  const renderWordItem = isFatching => {
    return word.length === 0 ? (
      <WordAert>
        <p>
          아직 추가한 단어가 없어요! 😅 <br />
          단어를 추가해주세요
        </p>
      </WordAert>
    ) : (
      word.map(item => (
        <WordItem key={item.id} wordItem={item} onDelWord={onDelWord} />
      ))
    );
  };

  return (
    <WordItemContainer>
      <HeaderTitle>
        <h2>{name}</h2>
      </HeaderTitle>
      {word.length !== 0 && (
        <nav>
          <WordSortMenu>
            <li>
              <label htmlFor="sort">정렬</label>
              <WordSort>
                <option>선택</option>
                <option>최신순</option>
                <option>사전순</option>
              </WordSort>
            </li>
          </WordSortMenu>
        </nav>
      )}
      {/* wordItem */}
      <WordList>{renderWordItem(isFetch)}</WordList>

      <ToggleBtnContainer>
        <button
          type="button"
          onClick={e => {
            navigate('/create-word', { replace: false });
          }}
        >
          단어 추가
        </button>
      </ToggleBtnContainer>
    </WordItemContainer>
  );
};
export default WordPage;
