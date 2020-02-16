import React from 'react';
import styled from 'styled-components';

import netlifyIcon from '../../assets/images/netlify-icon.svg';

const StyledFooter = styled.div`
  padding: 0 2rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 5rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    display: flex;
    a {
      display: flex;
    }
    > span {
      margin-right: 0.25rem;
    }
  }
  img {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <span>
          Built with{' '}
          <span role="img" aria-label="Netlify Icon">
            💖
          </span>
        </span>
        <span>& hosted on</span>
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
          <img src={netlifyIcon} alt="Netlify Icon" />
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
