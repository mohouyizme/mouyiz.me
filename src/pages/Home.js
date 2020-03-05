import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter } from 'react-icons/fi';

import Box from '../components/helpers/Box';
import Button from '../components/ui/Button';
import IconButton from '../components/ui/IconButton';

import me from '../assets/images/me.jpg';

const SayHi = styled.div`
  position: relative;
`;

const WhoAmI = styled.h1`
  position: absolute;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  @media (max-width: 50rem) {
    left: 5%;
  }
`;

const Me = styled.div`
  margin-left: auto;
  z-index: -1;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 90%;
  @media (max-width: 50rem) {
    max-width: 100%;
  }
  img {
    width: 100%;
    display: block;
  }
`;

const Highlight = styled.span`
  background: ${({ theme }) => theme.backgroundSecondary};
  transition: background 300ms ease-in-out;
`;

const Home = () => {
  return (
    <Fragment>
      <SayHi>
        <WhoAmI>
          <Highlight>
            Hola{' '}
            <span role="img" aria-label="Emoji">
              🙌
            </span>
            !
          </Highlight>
          <br />
          <Highlight>I'm Mohamed,</Highlight>
          <br />
          <Highlight>
            A Software Engineer based in{' '}
            <span role="img" aria-label="Morocco Emoji">
              🇲🇦
            </span>
            !
          </Highlight>
        </WhoAmI>
        <Me>
          <img src={me} alt="Mohamed Ouyizme" />
        </Me>
      </SayHi>
      <Box mt="2rem" display="flex" jc="flex-end" ai="center" mb="5rem">
        <Box>
          <Link to="/contact">
            <Button color="primary" size="medium">
              Contact Me
            </Button>
          </Link>
        </Box>
        <Box ml="1rem">
          <a
            href="https://twitter.com/mohouyizme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FiTwitter />
            </IconButton>
          </a>
        </Box>
        <Box ml="1rem">
          <a
            href="https://github.com/mohouyizme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FiGithub />
            </IconButton>
          </a>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
