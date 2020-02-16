import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Link, NavLink } from 'react-router-dom';

import logoLight from '../../assets/images/logo--light.svg';
import logoDark from '../../assets/images/logo--dark.svg';

import Box from '../helpers/Box';
import ThemeButton from './ThemeButton';
import MenuToggleButton from './MenuToggleButton';

import navigation from '../../data/navigation';

const StyledNavbar = styled.div`
  width: 100%;
  position: relative;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  @media (max-width: 50rem) {
    display: none;
  }
`;

const NavListItem = styled.li`
  margin: 0.5rem 0.5rem;
  list-style: none;
  a {
    position: relative;
    font-family: 'Poppins';
    padding: 1rem 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.headline};
    &::before {
      content: '';
      position: absolute;
      left: 0.75rem;
      bottom: 0.8rem;
      height: 0.5rem;
      width: 0;
      z-index: -1;
      background: ${({ theme }) => theme.backgroundSecondary};
      transition: width, background, 300ms ease-in-out;
    }
    &:hover,
    &.active {
      color: ${({ theme }) => theme.highlight};
      &::before {
        width: 50%;
      }
    }
  }
`;

const CustomLink = styled(Link)`
  display: flex;
`;

const CustomBox = styled(Box)`
  @media (min-width: 50rem) {
    margin: 0;
  }
`;

const Navbar = () => {
  const theme = useStoreState(({ ui }) => ui.theme);
  return (
    <StyledNavbar>
      <Box display="flex" jc="space-between" ai="center">
        <CustomLink to="/">
          <img src={theme === 'light' ? logoLight : logoDark} alt="logo" />
        </CustomLink>
        <Box>
          <nav>
            <NavList>
              {navigation.map(({ title, emoji, route }) => (
                <NavListItem key={title}>
                  <NavLink to={route}>
                    <span role="img" aria-label="Emoji">
                      {emoji}
                    </span>{' '}
                    {title}
                  </NavLink>
                </NavListItem>
              ))}
            </NavList>
          </nav>
        </Box>
        <Box display="flex">
          <ThemeButton />
          <CustomBox ml=".5rem">
            <MenuToggleButton />
          </CustomBox>
        </Box>
      </Box>
    </StyledNavbar>
  );
};

export default Navbar;
