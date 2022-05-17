import prototypes from 'prop-types';
import styled from '@emotion/styled';

import Header from '../components/Header';
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

DefaultLayout.prototype = {
  children: prototypes.node.isRequired,
};

const MainContainer = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export default DefaultLayout;
