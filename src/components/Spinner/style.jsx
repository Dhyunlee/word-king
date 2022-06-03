import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LodingAni = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & > span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: gray;
    border-radius: 50%;
    animation: ${LodingAni} 1s linear infinite;
  }

  & > span:nth-of-type(1) {
    background: #acbae7;
    animation-delay: 0s;
  }
  & > span:nth-of-type(2) {
    background: #738bda;
    animation-delay: 0.3s;
  }
  & > span:nth-of-type(3) {
    background: #3e61d4;
    animation-delay: 0.5s;
  }
`;
