import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      className="flex items-center h-[37px] border border-gray-500 !bg-grey-600 px-2 py-0 rounded-md"
      elevation={0}
    >
      <IconButton
        type="button"
        aria-label="search"
        className="!p-1 !text-white"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        className="!bg-transparent !text-white flex-1 placeholder:!text-white"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default SearchInput;
