import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
type Props = {};

const ClientComment = (props: Props) => {
  const top100Films = [
    { label: "News", year: 1994 },
    { label: "Popular", year: 1972 },
    { label: "Relate", year: 1974 },
  ];
  return (
    <div className="clscoment">
      <div className="clscoment-content">
        <h2 className="clscoment-title">Comment</h2>
        <div className="clscoment-action">
          <h3> số bình luận 0</h3>
          <Autocomplete
            options={top100Films}
            size="small"
            renderInput={(params) => <TextField {...params} label="Help" />}
          />
        </div>

        <Box
          component="form"
          sx={{
            width: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Pleased login"
            variant="outlined"
          />
        </Box>
      </div>
    </div>
  );
};

export default ClientComment;
