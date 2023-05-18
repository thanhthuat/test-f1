import React, { useEffect, memo } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

interface BoxCategoryProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const BoxCategory: React.FC<BoxCategoryProps> = ({ children, className = "", sx = {} }) => {
 
console.log("🚀 ~ file: box-category.tsx:12 ~ sx:", sx, className);
  return (
    <Box className={`${className} clsboxcategory `} sx={{ ...sx }}>
      <div className="clsboxcategory-content">
        <div className="clsboxcategory-body">{children}</div>
      </div>
    </Box>
  );
};

export default memo(BoxCategory);
