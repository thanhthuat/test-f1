import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

interface BoxCategoryProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const BoxCategory: React.FC<BoxCategoryProps> = ({ children, className = "", sx = {} }) => {
  return (
    <Box className={`${className} clsboxcategory `} sx={{ ...sx }}>
      <div className="clsboxcategory-content">
        <div className="clsboxcategory-body">{children}</div>
      </div>
    </Box>
  );
};

export default BoxCategory;
