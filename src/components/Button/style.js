import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const ButtonStyled = styled(Button)`
    && {
        color: ${(props) => props.theme[props.theme.selectedTheme].color} !important;
        background-color: ${(props) => props.theme[props.theme.selectedTheme].contrast} !important;
        text-transform: none;
        margin: 3px;
    }
`;

export { ButtonStyled }