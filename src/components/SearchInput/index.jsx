import React, { useState, useRef } from 'react'
import { debounce } from 'lodash'
import { PaperStyled } from './style';
import InputBase from '../InputBase';
import IconButton from '../IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({onSearch}) => {
    const [userQuery, setUserQuery] = useState("")
    const delayedQuery = useRef(debounce(q => onSearch(q), 500)).current;
    const onChange = e => {
        setUserQuery(e.target.value);
        delayedQuery(e.target.value);
    }
    return (
    <PaperStyled>
        <IconButton aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search for a country..." onChange={onChange} value={userQuery} />
    </PaperStyled>
)}

export default SearchInput