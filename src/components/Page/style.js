import styled from 'styled-components';


const PageStyled = styled.div`
  width: 100%;
  display: inline-table;
  background-color: ${(props) => props.theme[props.theme.selectedTheme].background};
  height: 100%;
`;

export { PageStyled }