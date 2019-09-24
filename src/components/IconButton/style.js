import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';


const IconButtonStyled = styled(IconButton)`
    && {
        color: ${(props) => props.theme.dark.color} !important;
    }
`;

export { IconButtonStyled }