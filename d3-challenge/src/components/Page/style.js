import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const PageStyled = styled.div`
  background-color: ${(props) => props.theme.dark.background};
  height: 100%;
`;

export { PageStyled }