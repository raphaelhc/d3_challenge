import styled from 'styled-components';


const LoadingStyled = styled.div`
    width: fit-content;
    margin: auto;
    background-color: ${(props) => props.theme.dark.background}
`;

export { LoadingStyled }