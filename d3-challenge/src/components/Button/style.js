import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const ButtonStyled = styled(Button)`
    && {
        color: ${(props) => props.theme.dark.color} !important;
        background-color: ${(props) => props.theme.dark.contrast} !important;
        text-transform: none;
        margin: 3px;
    }
`;

export { ButtonStyled }