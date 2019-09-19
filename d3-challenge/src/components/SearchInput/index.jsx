import React from 'react'
import { PaperStyled } from './style';
import InputBase from '../InputBase';
import IconButton from '../IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = () => (
    <PaperStyled>
        <IconButton aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search for a country..." />
    </PaperStyled>
)

export default SearchInput