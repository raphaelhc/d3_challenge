import React, { Fragment } from 'react'
import { AppBarStyled, TitleStyled } from './style'

const Title = () => <TitleStyled />
const AppBar = ({children}) => <AppBarStyled><TitleStyled>{children}</TitleStyled></AppBarStyled>

export default AppBar