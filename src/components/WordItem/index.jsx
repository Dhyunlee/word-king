import React from 'react';
import { WordItemStyle, HeadText, ContextText, DelBtn } from './style.jsx';

const WordItem = ({ wordItem, isViewMeaning, onDelWord }) => {
  const { word, meaning } = wordItem;

  return (
    <WordItemStyle>
      <dl>
        <HeadText>{word}</HeadText>
        {isViewMeaning && <ContextText>{meaning}</ContextText>}
      </dl>
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
