import { css } from '@emotion/react';

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    border: 0;
    padding: 0.2rem 0.7rem;
    cursor: pointer;
  }

  .toggleBtn {
    width: 80px;
    height: 80px;
    position: fixed;
    right: 40px;
    bottom: 30px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 50%;
  }

  .toggleBtn > button {
    transform: translate(8px, 15px);
    background: transparent;
  }
`;
