import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Select from './Select';


export const CardStyled = styled(Card)`
    margin-right: 5px;
    @media ${(props) => props.theme.device.mobile} {
        margin-right: 0px;
        margin-left: auto;
        margin-right: auto;
    }
    && {
        background-color: ${(props) => props.theme.dark.contrast};
    }
    margin-top: 30px;
`;

export const CardsContainer = styled.div`
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
    width: 200px;
    height: 133.33px;
    object-fit: cover;

    @media ${(props) => props.theme.device.mobile} {
        width: 300px;
        height: 180px;
    }
`;

export const SelectStyled = styled(Select)`
    @media (max-width: 460px) {
       && {
        margin-top: 20px;  
       } 
    }
`;

export const TitleStyled = styled.div`
    max-width: 170px;
    @media ${(props) => props.theme.device.mobile} {
        max-width: 250px;
    }
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.dark.color};
    margin: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const LabelStyled = styled.span`
    font-weight: 300;
    font-size: 14px;
    color: ${(props) => props.theme.dark.color};
`;

export const ValueStyled = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.dark.color};
    margin-left: 5px;
`;

export const DataContainer = styled.div`
    margin-left: 15px;
    margin-bottom: 15px;
`;