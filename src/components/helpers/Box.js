import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  ${({ m }) => m && `margin: ${m}`};
  ${({ mt }) => mt && `margin-top: ${mt}`};
  ${({ mr }) => mr && `margin-right: ${mr}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  ${({ ml }) => ml && `margin-left: ${ml}`};
  ${({ p }) => p && `padding: ${p}`};
  ${({ pt }) => pt && `padding-top: ${pt}`};
  ${({ pr }) => pr && `padding-right: ${pr}`};
  ${({ pb }) => pb && `padding-bottom: ${pb}`};
  ${({ pl }) => pl && `padding-left: ${pl}`};
  ${({ display }) => display && `display: ${display}`};
  ${({ position }) => position && `position: ${position}`};
  ${({ ai }) => ai && `align-items: ${ai}`};
  ${({ jc }) => jc && `justify-content: ${jc}`};
  ${({ h }) => h && `height: ${h}`};
  ${({ mh }) => mh && `max-height: ${mh}`};
  ${({ mw }) => mw && `max-width: ${mw}`};
`;

const Box = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export default Box;
