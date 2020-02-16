import React from 'react';
import styled from 'styled-components';

import colorHover from '../../utils/colorHover';

const StyledIconButton = styled.button`
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
  &:hover {
    background: ${({ theme, menuIsOpen }) =>
      menuIsOpen
        ? colorHover(theme.background, theme.type)
        : colorHover(theme.buttonBackgroundSecondary, theme.type)};
  }
`;

const IconButton = props => {
  return (
    <StyledIconButton {...props} aria-label="Menu Toggle Button">
      {props.children}
    </StyledIconButton>
  );
};

export default IconButton;
