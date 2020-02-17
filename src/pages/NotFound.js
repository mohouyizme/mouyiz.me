import React from 'react';
import { useStoreState } from 'easy-peasy';

import styled from 'styled-components';

import NotFoundLight from '../assets/images/404--light.svg';
import NotFoundDark from '../assets/images/404--dark.svg';

const StyledNotFound = styled.div`
  text-align: center;
  img {
    display: block;
    margin: 0 auto 3rem;
    max-width: 15rem;
    width: 100%;
  }
`;

const NotFound = () => {
  const theme = useStoreState(({ ui }) => ui.theme);
  return (
    <StyledNotFound>
      <img
        src={theme === 'light' ? NotFoundLight : NotFoundDark}
        alt="Not Found"
      />
      <h2>Yup! I think we're lost!</h2>
    </StyledNotFound>
  );
};

export default NotFound;
