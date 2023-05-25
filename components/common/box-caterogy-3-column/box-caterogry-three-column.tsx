import React, { memo } from "react";
import BoxCaterogyThreeColumnHeader from "./box-caterogy-three-column-header";
import CardColumn from "../card-column/card-column";
import CardRow from "../card-row/card-row";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import { SxProps, Theme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
interface BoxCategoryThreeColumnProps {
  className?: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  listCategory: TCategory[];
}
type TCategory = {
  title: string;
};
// const arr = [
//   { title: "Giải trí" },
//   { title: "Giới sao" },
//   { title: "Phim Nhạc" },
//   { title: "Thời trang" },
// ];
const BoxCategoryThreeColumn: React.FC<BoxCategoryThreeColumnProps> = ({
  className = "",
  sx = {},
  children,
  listCategory = [],
}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <section className={`${className} clsboxcaterogrycolumn`}>
      <BoxCaterogyThreeColumnHeader item={listCategory} sx={{ ...sx }} />
      <Box className="clsboxcaterogrycolumn-content" sx={{ ...sx }}>
        <Grid2 container spacing={1}>
          <Grid xs={12} tablet={6} laptop={6}>
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[0], {
                item: { ...topmovie[18], title: "123131-trhchxc", opacity: "121kjcshdjf" },
                isAuthor: true,
              })}

            {/* <CardColumn item={topmovie[10]} isAuthor={true} /> */}
          </Grid>
          <Grid xs={12} tablet={6} laptop={3}>
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[1], {
                item: { ...topmovie[11], title: "123131-trhchxc" },
                isAuthor: true,
                isDes: false,
              })}
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[2], {
                item: { ...topmovie[10] },
                isAuthor: true,
                isDes: false,
              })}
          </Grid>
          <Grid xs={12} laptop={3}>
            <Grid container rowSpacing={1}>
              <Grid xs={12} tablet={6} laptop={12}>
                {/* {children &&
                  (children as React.ReactNode[]).length > 0 &&
                  (children as React.ReactNode[])[3]} */}
                <CardRow
                  item={topmovie[18]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[17]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[16]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[15]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[16]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[17]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid2>
      </Box>
    </section>
  );
};

export default memo(BoxCategoryThreeColumn);
