import React from 'react';

const WordItem = ({ wordItem, isViewMeaning, onDelWord }) => {
  const { word, meaning } = wordItem;

  return (
    <div>
      <dl>
        <dt>{word}</dt>
        {isViewMeaning && <dd>{meaning}</dd>}
      </dl>
      <button
        onClick={e => {
          onDelWord(wordItem);
        }}
      >
        {/* 삭제 */}
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
export default WordItem;
