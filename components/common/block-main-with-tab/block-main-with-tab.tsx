import React, { useEffect, memo } from "react";
import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import Grid from "@mui/system/Unstable_Grid";
import { Box, Divider, Stack } from "@mui/material";
import Tab from "@components/layouts/layout1/tab/tab";
interface BlockMainWithTabProps {
  children: React.ReactNode;
  listNew: any[];
  className?: string;
  isTab: boolean;
}

const BlockMainWithTab: React.FC<BlockMainWithTabProps> = ({
  children,
  listNew,
  className = "",
  isTab = false,
}) => {
  return (
    <div className="clscontenthomelayout1 pt-2">
      <Box className="">
        <Grid container spacing={2}>
          <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} md={8} sm={12}>
            {(children as React.ReactNode[])?.length > 0 && (children as React.ReactNode[])[0]}
            {/* <CardRowMain /> */}
            <div className={`${className}`} style={{ margin: "20px 0px" }}>
              {(children as React.ReactNode[])?.length > 1 &&
                listNew.slice(0, 10).map((item, index) => {
                  return React.cloneElement((children as any[])[1], {
                    item: { ...item },
                    key: `${(children as any[])[1].key}-${index}`,
                  });
                })}
              {isTab &&
                (children as React.ReactNode[])?.length > 3 &&
                (children as React.ReactNode[])[3]}
              {(children as React.ReactNode[])?.length > 1 &&
                listNew.slice(10, 20).map((item, index) => {
                  return React.cloneElement((children as any[])[1], {
                    item: { ...item },
                    key: `${(children as any[])[1].key}-${index}`,
                  });
                })}
              {isTab &&
                (children as React.ReactNode[])?.length > 3 &&
                (children as React.ReactNode[])[3]}
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
            {isTab ? (
              <>
                {(children as React.ReactNode[])?.length > 2 &&  (children as React.ReactNode[])?.length > 1 &&
                listNew.slice(10, 20).map((item, index) => {
                  return React.cloneElement((children as any[])[1], {
                    item: { ...item },
                    key: `${(children as any[])[1].key}-${index}`,
                  });
                })}
              </>
            ) : (
              <BoxCategory className="clslistcategory-item2">
                {(children as React.ReactNode[])?.length > 2 && (children as React.ReactNode[])[2]}
              </BoxCategory>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default memo(BlockMainWithTab);
