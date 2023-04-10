import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack  from "@mui/material/Stack";
type Props = {};

const ClientComment = (props: Props) => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {" "}
        <p> 100 characters</p> HelpDeletion Criteria
      </Stack>
      <Box
        component="form"
        sx={{
          width: "100%",
          marginTop: "16px",
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
