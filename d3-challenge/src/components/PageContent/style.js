import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const PageContentStyled = styled.div`
  padding: 50px 30px;
  @media ${(props) => props.theme.device.mobile} {
    padding: 20px 15px;
  }
`;

export { PageContentStyled }