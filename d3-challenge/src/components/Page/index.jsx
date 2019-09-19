import React, { Fragment } from 'react'
import AppBar from '../AppBar';
import { PageStyled } from './style'

const Page = ({children}) => (
    <Fragment>
        <AppBar position="static">Where in the world?</AppBar>
        <PageStyled>{children}</PageStyled>
    </Fragment>
)

export default Page