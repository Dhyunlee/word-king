import React from 'react';
import { HeaderContainer, Title, Menu } from './style.jsx';

function Header() {
  return (
    <HeaderContainer>
      <Title>
        <a href="/">
          <span>내 영단어장</span>
        </a>
      </Title>
      <nav>
        <Menu>
          <li>
            <a href="/">단어장 목록</a>
          </li>
          <li>
            <a href="/typing-game">타이핑 게임</a>
          </li>
        </Menu>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
