import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '../Button'

const AppBarStyled = styled(AppBar)`
  &&{
    height: 70px;
    background-color: ${(props) => props.theme[props.theme.selectedTheme].contrast};
  }
`;

const ButtonStyled = styled(Button)`
  &&{
    height: fit-content;
    background-color: ${(props) => props.theme[props.theme.selectedTheme].background};
  }
`;

const AppBarContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 50px;
    @media ${(props) => props.theme.device.mobile} {
        margin-left: 20px;
    }
    font-weight: 600;
    font-size: 20px;
    justify-content: space-between;
    color: ${(props) => props.theme[props.theme.selectedTheme].color};
`;

const LabelStyled = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.theme[props.theme.selectedTheme].color};
    margin-left: 5px;
`;

export {
  AppBarStyled,
  TitleStyled,
  AppBarContent,
  ButtonContainer,
  ButtonStyled,
  LabelStyled
}