import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useState } from "react";
import { useSearchContext } from "../../../store/searchContext";
import { useContext } from "react";

const FilterComponent = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </Search>
  );
};

export default FilterComponent;
