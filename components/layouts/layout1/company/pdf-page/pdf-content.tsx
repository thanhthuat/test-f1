import React from "react";
import { dataListPdf } from "./data";
import Link from "next/link";
import Grid from "@mui/system/Unstable_Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type Props = {};

const PdfContent = (props: Props) => {
  const [year, setYear] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  return (
    <div className="pdfcontent">
      <div className="pdfcontent-content">
        <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Age"
                onChange={handleChange}
                size="small"
              >
                <MenuItem value={10}>2023</MenuItem>
                <MenuItem value={20}>2022</MenuItem>
                <MenuItem value={30}>2021</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Grid container spacing={2}>
          {dataListPdf.map((item, index) => {
            return (
              <Grid md={3} sm={6} key={index}>
                <div className="pdfcontent-item">
                  <Link href={item.url} passHref target="_blank">
                    <img src={item.img} alt="pdf-page" />
                  </Link>
                  <div className="pdfcontent-item__title">
                    <p className="pdfcontent-item__index">
                      <b>제 00{index + 1}호</b>
                    </p>
                    <p className="pdfcontent-item__content">{item.title}</p>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <div className="pdfcontent-pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </div>
  );
};

export default PdfContent;
