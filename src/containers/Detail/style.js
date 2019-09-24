import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const GridStyled = styled(Grid)`
    && {
        margin: 0px;
        padding: 0px;
        margin-top: 20px;
    }
`;

export const PageContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ImgStyled = styled.img`
    width: 100%;
`;

export const LabelStyled = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.theme[props.theme.selectedTheme].color};
`;

export const ValueStyled = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme[props.theme.selectedTheme].color};
    margin-left: 5px;
`;

export const BorderCountriesContent = styled.div`
    display: flex;
    margin-top: 15px;
`;

export const BordersContent = styled.div`
    margin-left: 10px;
`;

export const TitleStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    justify-content: space-between;
    color: ${(props) => props.theme[props.theme.selectedTheme].color};
    margin-bottom: 15px;
`;

export const DataContainer = styled.div`
    @media (min-width: 460px) {
        margin-left: 20px;
    }
`;

export const DataContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;