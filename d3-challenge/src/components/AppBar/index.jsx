import React from 'react'
import { AppBarStyled, TitleStyled } from './style'

const AppBar = ({children}) => <AppBarStyled><TitleStyled>{children}</TitleStyled></AppBarStyled>

export default AppBar