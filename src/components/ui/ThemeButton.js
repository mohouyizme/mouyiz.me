import React from 'react';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';
import { FiSun, FiMoon } from 'react-icons/fi';

const StyledThemeToggleButton = styled.button`
  border: none;
  border-radius: 100%;
  line-height: 0;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.buttonTextSecondary};
  background: ${({ theme }) => theme.buttonBackgroundSecondary};
  transition: background 300ms ease-in-out;
  overflow: hidden;
  position: relative;
  height: 3em;
  width: 3rem;
`;

const SunIcon = styled.div`
  position: absolute;
  left: 50%;
  top: ${({ theme }) => (theme.type === 'light' ? '150%' : '50%')};
  transform: translate(-50%, -50%);
  transition: top 300ms ease-in-out;
`;

const MoonIcon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => (theme.type === 'light' ? '50%' : '150%')};
  transform: translate(-50%, -50%);
  transition: left 300ms ease-in-out;
`;

const ThemeToggleButton = props => {
  const toggleTheme = useStoreActions(({ ui }) => ui.toggleTheme);

  return (
    <StyledThemeToggleButton
      aria-label="Theme Toggle Button"
      onClick={toggleTheme}
    >
      <SunIcon>
        <FiSun size="1.5rem" />
      </SunIcon>
      <MoonIcon>
        <FiMoon size="1.5rem" />
      </MoonIcon>
    </StyledThemeToggleButton>
  );
};

export default ThemeToggleButton;
