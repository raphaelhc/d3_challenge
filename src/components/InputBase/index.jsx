import React from 'react'
import { InputBaseStyled } from './style';

const InputBase = ({...props, placeholder}) => <InputBaseStyled {...props} placeholder={placeholder} />

export default InputBase