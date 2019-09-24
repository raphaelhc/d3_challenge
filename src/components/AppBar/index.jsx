import React from 'react'
import { withTheme } from 'styled-components';
import { Brightness5, Brightness3 } from '@material-ui/icons';
import {
    AppBarStyled,
    TitleStyled,
    AppBarContent,
    ButtonContainer,
    ButtonStyled,
    LabelStyled
} from './style'

const AppBar = ({...props, children}) => {
    const { setSelectedTheme } = props.theme
    const isDark = props.theme && props.theme.selectedTheme === 'dark'

    const renderMoon = () => (
        <ButtonStyled onClick={() => setSelectedTheme('dark')} {...props}>
            <Brightness3 /> <LabelStyled>Dark Mode</LabelStyled>
        </ButtonStyled>
    )
    
    const renderSun = () => (
        <ButtonStyled onClick={() => setSelectedTheme('ligth')} {...props}>
            <Brightness5 /> <LabelStyled>Ligth Mode</LabelStyled>
        </ButtonStyled>
    )

    return (
        <AppBarStyled>
            <AppBarContent>
                <TitleStyled>{children}</TitleStyled>
                <ButtonContainer>
                    {isDark ? renderSun() : renderMoon()}
                </ButtonContainer>
            </AppBarContent>
        </AppBarStyled>
    )
}

export default withTheme(AppBar)