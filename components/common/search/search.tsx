import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
interface SearchBoxProps {
  sx?: any;
  value: string;
  onSubmit: (value: React.FormEvent<HTMLFormElement> | React.MouseEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onChange, onSubmit, value, sx = {} }) => {
  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit} sx={{ width: "100%" }}>
      <FormControl
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
          },
        }}
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onSubmit}
                onMouseDown={onSubmit}
                edge="end"
                type="submit"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          value={value}
          onChange={onChange}
          sx={{
            ...sx,
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBox;
