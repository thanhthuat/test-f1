import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
type Props = {};

const ClientComment = (props: Props) => {
  return (
    <div>
      <div>100 charactersHelpDeletion Criteria</div>
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
  );
};

export default ClientComment;
