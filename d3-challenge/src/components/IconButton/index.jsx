import React from 'react'
import { IconButtonStyled } from './style';

const IconButton = ({children}) => (
    <IconButtonStyled aria-label="search">
        {children}
    </IconButtonStyled>
)

export default IconButton