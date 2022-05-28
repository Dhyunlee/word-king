import React, { useState } from 'react';
import {
  WordItemStyle,
  HeadText,
  ContextText,
  ViewMening,
  DelBtn,
} from './style.jsx';

const WordItem = ({ wordItem, onDelWord }) => {
  const { word, meaning } = wordItem;
  const [isShowMeaning, setIsShowMeaning] = useState(false);

  const handleShow = () => {
    setIsShowMeaning(!isShowMeaning);
  };
  return (
    <WordItemStyle>
      <dl>
        <HeadText>{word}</HeadText>
        {isShowMeaning && <ContextText>{meaning}</ContextText>}
      </dl>
      <ViewMening onClick={handleShow}>
        {isShowMeaning ? '단어뜻 숨기기' : '단어뜻 보기'}
      </ViewMening>
      <DelBtn
        onClick={e => {
          onDelWord(wordItem);
        }}
      >
        {/* 삭제 */}
        <i className="fa-solid fa-trash-can"></i>
      </DelBtn>
    </WordItemStyle>
  );
};
export default WordItem;
