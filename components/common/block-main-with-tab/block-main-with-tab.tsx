import React, { useEffect } from "react";
import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import Grid from "@mui/system/Unstable_Grid";
import { Box, Divider, Stack } from "@mui/material";
interface BlockMainWithTabProps {
  children: React.ReactNode;
  listNew: any[];
}

const BlockMainWithTab: React.FC<BlockMainWithTabProps> = ({ children, listNew }) => {
  return (
    <div className="clscontenthomelayout1 pt-2">
      <Box className="">
        <Grid container spacing={2}>
          <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} md={8} sm={12}>
            {(children as React.ReactNode[])?.length > 0 && (children as React.ReactNode[])[0]}
            {/* <CardRowMain /> */}
            <div className="layoutgrid-3" style={{ margin: "20px 0px" }}>
              {(children as React.ReactNode[])?.length > 0 &&
                listNew.map((item) => {
                  return React.cloneElement((children as any[])[1], {
                    item: { ...item, title: "123131-trhchxc", opacity: "121kjcshdjf" },
                  });
                })}
             
            </div>

        
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          ></Divider>
          <Grid sx={{ paddingTop: 0 }} xs>
            <BoxCategory className="clslistcategory-item2">
              {(children as React.ReactNode[])?.length > 0 && (children as React.ReactNode[])[2]}
            </BoxCategory>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BlockMainWithTab;
