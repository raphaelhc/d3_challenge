import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


const LoadingStyled = styled.div`
    width: fit-content;
    margin: auto;
    height: 100%
    display: flex;
    background-color: ${(props) => props.theme[props.theme.selectedTheme].background}
`;

const CircularProgressStyled = styled(CircularProgress)`
    margin: auto;
`;

export { LoadingStyled, CircularProgressStyled }