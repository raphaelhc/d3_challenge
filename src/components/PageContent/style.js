import styled from 'styled-components';

const PageContentStyled = styled.div`
  padding: 50px 30px;
  margin-top: 50px;
  height: 100%;
  background-color: ${(props) => props.theme[props.theme.selectedTheme].background};
  @media ${(props) => props.theme.device.mobile} {
    padding: 20px 15px;
    margin-top: 80px;
  }
`;

export { PageContentStyled }