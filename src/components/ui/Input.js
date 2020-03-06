import React from 'react';
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
`;

const inputStyles = css`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  border-radius: 0.25rem;
  outline: none;
  color: inherit;
  line-height: 1;
  transition: background 300ms ease-in-out;
  &:focus {
    border-right: 0.25rem solid ${({ theme }) => theme.highlight};
  }
`;

const InputElement = styled.input`
  ${inputStyles}
`;

const TextareaElement = styled.textarea`
  ${inputStyles}
  resize: vertical;
`;

const Input = ({ kind, label, ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={props.id}>{label}</Label>
      {kind === 'input' && <InputElement type="text" {...props} />}
      {kind === 'textarea' && <TextareaElement type="text" {...props} />}
    </InputContainer>
  );
};

export default Input;
