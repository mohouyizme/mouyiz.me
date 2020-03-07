import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import navigation from '../../data/navigation';

const StyledSideMenu = styled.div`
  z-index: 1;
  font-size: 2rem;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ menuIsOpen }) => (menuIsOpen ? 0 : '100%')};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundSecondary};
  transition: left 300ms ease-in-out;
  @media (max-width: 50rem) {
    display: flex;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
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
      background: ${({ theme }) => theme.background};
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

const SideMenu = () => {
  const menuIsOpen = useStoreState(({ ui }) => ui.menuIsOpen);
  const toggleMenu = useStoreActions(({ ui }) => ui.toggleMenu);
  return (
    <StyledSideMenu menuIsOpen={menuIsOpen}>
      <nav>
        <NavList>
          {navigation.map(({ title, emoji, route }) => (
            <NavListItem key={title}>
              <NavLink to={route} exact onClick={toggleMenu}>
                <span role="img" aria-label="Emoji">
                  {emoji}
                </span>{' '}
                {title}
              </NavLink>
            </NavListItem>
          ))}
        </NavList>
      </nav>
    </StyledSideMenu>
  );
};

export default SideMenu;
