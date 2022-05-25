import React from 'react';
import { Link } from 'react-router-dom';
import { VocaNavContainer, VocaNav, MenuItem } from './style';

function SideMenu({ isView, toggleBtn }) {
  return (
    <VocaNavContainer>
      {isView && (
        <VocaNav>
          <MenuItem>
            <Link to="/create-voca">단어장 추가</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/create-word">단어 추가</Link>
          </MenuItem>
        </VocaNav>
      )}
      <button onClick={toggleBtn}>추가하기</button>
    </VocaNavContainer>
  );
}

export default SideMenu;
