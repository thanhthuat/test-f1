import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { SxProps, Theme } from "@mui/material/styles";
interface Icon {
  url: string ;
  title: string;
  description: string;
}
interface IPropsBoxService {
  item: Icon;
  sx?: SxProps<Theme>;
}

const BoxService: React.FC<IPropsBoxService> = ({ item ,sx={}}) => {
  return (
    <Box
      className="prexfixboxservice"
      sx={{ ...sx,padding: " 10px", backgroundColor: "#fbf4f5", }}
    >
      <Stack direction={{ xs: "column", sm: "column" }} alignItems="center">
        <div className="prexfixboxservice-icon">
          <Image src={item.url} alt={item.title} />
        </div>
        <Box>
          <Typography variant="h3" gutterBottom className="prexfixboxservice-title">
            {item.title}
          </Typography>
          <p className="prexfixboxservice-description"> {item.description}</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default BoxService;
