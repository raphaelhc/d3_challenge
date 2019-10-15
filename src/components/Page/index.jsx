import React, { Fragment, memo } from 'react'
import AppBar from '../AppBar';
import { PageStyled } from './style'

const Page = ({children}) => (
    <Fragment>
        <AppBar position="static">
            <div>Where in the world?</div>
        </AppBar>
        <PageStyled>{children}</PageStyled>
    </Fragment>
)

export default memo(Page, (prev, next) => prev !== next)