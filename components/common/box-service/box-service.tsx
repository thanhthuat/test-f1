import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
interface Icon {
  icon: string | ReactNode;
  title: string;
  description: string;
}
interface IPropsBoxService {
  item: Icon;
}

const BoxService: React.FC<IPropsBoxService> = ({ item }) => {
  return (
    <Box sx={{ padding: "10px", backgroundColor: "#fbf4f5" ,width:'219px'}}>
      <Stack direction={{ xs: "column", sm: "column" }}>
        <div>{item.icon}</div>

        <Box>
          <Typography variant="h3" gutterBottom>
            {item.title}
          </Typography>
          <p> {item.description}</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default BoxService;
