import Paper from '@material-ui/core/Paper';
import styled, { ThemeProvider } from 'styled-components';


const PaperStyled = styled(Paper)`
    && {
        background-color: ${(props) => props.theme.dark.contrast};
        max-width: 400px;
    }
`;

export { PaperStyled }