import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";

type Props = {};

const AuthorConnect = (props: Props) => {
  return (
    <Box className="prefixauthorconnect">
      <Stack className="prefixauthorconnect-content" direction="row" justifyContent="space-between">
        <Stack
          className="prefixauthorconnect-content"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            alt="Remy Sharp"
            src="/image/detail-page/avatar.png"
            sx={{ width: 56, height: 56, marginRight: "20px" }}
          />
          <p>Reporter Yujin Kim</p>
        </Stack>
        <div>
          <Avatar sx={{ width: 24, height: 24 }}>
            <MailOutlineIcon />
          </Avatar>
        </div>
      </Stack>
    </Box>
  );
};

export default AuthorConnect;
