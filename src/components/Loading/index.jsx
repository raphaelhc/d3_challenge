import React from 'react'
import { LoadingStyled } from './style'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
    <LoadingStyled>
        <CircularProgress></CircularProgress>
    </LoadingStyled>
)

export default Loading