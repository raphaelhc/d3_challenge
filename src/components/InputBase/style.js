import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';


const InputBaseStyled = styled(InputBase)`
    && {
        color: ${(props) => props.theme[props.theme.selectedTheme].color} !important;
    }
`;

export { InputBaseStyled }