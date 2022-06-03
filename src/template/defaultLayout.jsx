import prototypes from 'prop-types';
import styled from '@emotion/styled';

import Header from '../components/Header';
const DefaultLayout = ({ children }) => {
  return (
    <WordContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
    </WordContainer>
  );
};

DefaultLayout.propTypes = {
  children: prototypes.node.isRequired,
};

const WordContainer = styled.div`
  width: 100%;
  min-width: 500px;
  height: auto;
`;
const MainContainer = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export default DefaultLayout;
