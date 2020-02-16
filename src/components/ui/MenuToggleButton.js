import React from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { FiMenu, FiX } from 'react-icons/fi';

const StyledMenuToggleButton = styled.button`
  z-index: 2;
  display: none;
  border: none;
  border-radius: 100%;
  line-height: 0;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.buttonTextSecondary};
  background: ${({ theme, menuIsOpen }) =>
    menuIsOpen ? theme.background : theme.buttonBackgroundSecondary};
  overflow: hidden;
  position: relative;
  height: 3em;
  width: 3rem;
  transition: background 300ms ease-in-out;
  @media (max-width: 50rem) {
    display: block;
  }
`;

const SunIcon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ menuIsOpen }) => (menuIsOpen ? '150%' : '50%')};
  transform: translate(-50%, -50%);
  transition: left 300ms ease-in-out;
`;

const MoonIcon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ menuIsOpen }) => (menuIsOpen ? '50%' : '-50%')};
  transform: translate(-50%, -50%);
  transition: left 300ms ease-in-out;
`;

const MenuToggleButton = () => {
  const menuIsOpen = useStoreState(({ ui }) => ui.menuIsOpen);
  const toggleMenu = useStoreActions(({ ui }) => ui.toggleMenu);

  return (
    <StyledMenuToggleButton
      aria-label="Menu Toggle Button"
      menuIsOpen={menuIsOpen}
      onClick={toggleMenu}
    >
      <SunIcon menuIsOpen={menuIsOpen}>
        <FiMenu size="1.5rem" />
      </SunIcon>
      <MoonIcon menuIsOpen={menuIsOpen}>
        <FiX size="1.5rem" />
      </MoonIcon>
    </StyledMenuToggleButton>
  );
};

export default MenuToggleButton;
