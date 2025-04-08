import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      className="flex items-center w-[237px] h-[37px] border border-gray-500 !bg-grey-600 px-2 py-0 rounded-md"
      elevation={0}
    >
      <IconButton
        type="button"
        aria-label="search"
        className="!p-2 !text-white"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        className="!bg-transparent !text-white ml-2 flex-1 placeholder:text-white"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default SearchInput;
