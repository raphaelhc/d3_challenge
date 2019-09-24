import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';


const AppBarStyled = styled(AppBar)`
  &&{
    height: 70px;
    background-color: ${(props) => props.theme.dark.contrast};
  }
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
`;

export { AppBarStyled, TitleStyled }