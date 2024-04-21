import React from 'react';
import { TextField } from '@mui/material';
import Search from '../layout/header/ui/Search';

const Search = ({ handleSearch }) => {
  return (
    <Search 
        onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;