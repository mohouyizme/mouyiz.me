import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import colorHover from '../../utils/colorHover';

const StyledButton = styled.button`
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '1rem';
      case 'medium':
        return '1.5rem';
      case 'large':
        return '1.75rem';
      default:
        return '1.5rem';
    }
  }};
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 0;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.buttonText;
      case 'secondary':
        return theme.buttonTextSecondary;
      default:
        return theme.buttonText;
    }
  }};
  background: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.buttonBackground;
      case 'secondary':
        return theme.buttonBackgroundSecondary;
      default:
        return theme.buttonBackground;
    }
  }};
  transition: background 300ms ease-in-out;
  &:hover {
    background: ${({ color, theme }) => {
      switch (color) {
        case 'primary':
          return colorHover(theme.buttonBackground, theme.type);
        case 'secondary':
          return colorHover(theme.buttonBackgroundSecondary, theme.type);
        default:
          return colorHover(theme.buttonBackground, theme.type);
      }
    }};
  }
`;

const Button = props => {
  const themeType = useStoreState(({ ui }) => ui.theme);

  return (
    <StyledButton {...props} themeType={themeType}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
