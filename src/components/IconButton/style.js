import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';


const IconButtonStyled = styled(IconButton)`
    && {
        color: ${(props) => props.theme[props.theme.selectedTheme].color} !important;
    }
`;

export { IconButtonStyled }