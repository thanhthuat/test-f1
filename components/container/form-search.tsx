import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Controller, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
type Props = {
  handleGetData: (payload: any) => void;
};
type FormValues = {
  type: string;
  year: string;
  detail: string;
};
const year = [
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" },
  { label: "2013", value: "2013" },
  { label: "2012", value: "2012" },
  { label: "2011", value: "2011" },
  { label: "2010", value: "2010" },
  { label: "2009", value: "2009" },
  { label: "2008", value: "2008" },
  { label: "2007", value: "2007" },
  { label: "2006", value: "2006" },
  { label: "2005", value: "2005" },
  { label: "2004", value: "2004" },
  { label: "2003", value: "2003" },
  { label: "2002", value: "2002" },
  { label: "2001", value: "2001" },
  { label: "2000", value: "2000" },
];

// /circuits/<circuitId>
// /constructors/<constructorId>
// /drivers/<driverId>
// /grid/<position>
// /fastest/<rank>
// /status/<statusId>
const type = [
  { label: "Circuits", value: "circuits" },
  { label: "Team", value: "constructors" },
  { label: "Drivers", value: "drivers" },
  { label: "Fastest", value: "fastest" },
];
const FormSearch: React.FC<Props> = ({ handleGetData }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      type: "circuits",
      year: "2023",
      detail: "all",
    },
  });
  const { control, handleSubmit } = form;
  const optional = [{ label: "All", value: "all" }];
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleGetData({ year: data.year, type: data.type, detail: data.detail });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Controller
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={onChange}
                      label="Year"
                      defaultValue={"2023"}
                    >
                      {year.map((label, key) => (
                        <MenuItem key={label.label} value={label.value}>
                          {label.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                name="year"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={onChange}
                      label="Type"
                      defaultValue={"circuits"}
                    >
                      {type.map((label, key) => (
                        <MenuItem key={label.label} value={label.value}>
                          {label.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                name="type"
                control={control}
              />
            </Grid>

            <Grid item xs={3}>
              <Controller
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">Detail</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={onChange}
                      label="Detail"
                      defaultValue={"all"}
                    >
                      {optional.map((label, key) => (
                        <MenuItem key={label.label} value={label.value}>
                          {label.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                name="detail"
                control={control}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" sx={{height:"100%"}}>
               Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default FormSearch;
