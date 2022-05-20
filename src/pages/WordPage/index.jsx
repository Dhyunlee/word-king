import React, { useEffect, useState, useCallback } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import WordItem from '../../components/WordItem';
import { DEV_KEY } from './../../constants/dev-key';

const { default_api_url } = DEV_KEY;

const WordPage = () => {
  const [word, setWord] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [isViewMeaning, setIsViewMeaning] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewMeaning = e => {
    setIsViewMeaning(preState => !preState);
  };

  const onDelWord = useCallback(
    async ({ id: wordId }) => {
      if (window.confirm('단어를 삭제하실건가요?')) {
        console.log('삭제합니다.');

        await axios.delete(`${default_api_url}/words/${wordId}`);
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
      <div className="wordAlert">
        <p>
          아직 추가한 단어가 없어요! 😅 <br />
          단어를 추가해주세요
        </p>
      </div>
    ) : (
      word.map(item => (
        <WordItem
          key={item.id}
          wordItem={item}
          isViewMeaning={isViewMeaning}
          onDelWord={onDelWord}
        />
      ))
    );
  };

  return (
    <section className="wordItemContainer">
      <header className="headerTitle">
        <h2>{name}</h2>
      </header>
      {word.length !== 0 && (
        <nav>
          <ul className={'wordSortMenu'}>
            <li>
              <label htmlFor="sort">정렬</label>
              <select className={'wordSort'} id="sort">
                <option>선택</option>
                <option>최신순</option>
                <option>사전순</option>
              </select>
            </li>
            <li>
              <button onClick={handleViewMeaning} className="viewWord">
                {isViewMeaning ? '단어뜻 숨기기' : '단어뜻 보기'}
              </button>
            </li>
          </ul>
        </nav>
      )}
      {/* wordItem */}
      <div className="wordList">{renderWordItem(isFetch)}</div>

      <div className="styled.toggleBtn">
        <button
          type="button"
          onClick={e => {
            navigate('/create-word', { replace: false });
          }}
        >
          단어 추가
        </button>
      </div>
    </section>
  );
};
export default WordPage;
