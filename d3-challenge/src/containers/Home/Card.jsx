import React from 'react'
import { CardStyled } from './style';

const Card = ({...props, children}) => <CardStyled {...props}>{children}</CardStyled>

export default Card