import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormSearch from "./form-search";
import HeaderContainer from "./header";
import tmdbApi from "lib/api/tmdbApi";
import BasicTable from "./data-table";
import Typography from "@mui/material/Typography";
import Loading from "./loading";
import ChartTeam from "./chart-team";
import Grid from "@mui/material/Grid";
import ChartDriver from "./chart-driver";
import ChartFast from "./chart-fast";
type Props = {};

interface IbasicTable {
  column: [{ title: string; key: string }];
}
type FormValues = {
  type: string;
  year: string;
  detail?: string;
};
const columnTeam = [
  {
    title: "Name Team",
    key: "raceName",
    render: (row: any) => {
      return <p>{row?.Constructor?.name} </p>;
    },
  },
  {
    title: "nationality",
    key: "time",
    render: (row: any) => {
      return <p>{row?.Constructor?.nationality} </p>;
    },
  },
  {
    title: "points",
    key: "round",
    render: (row: any) => {
      return <p>{row.points} </p>;
    },
  },
  {
    title: "position",
    key: "position",
    render: (row: any) => {
      return <p>{row?.position} </p>;
    },
  },
  {
    title: "wins",
    key: "wins",
    render: (row: any) => {
      return <p>{row.wins} </p>;
    },
  },
];

const columnCircuits = [
  {
    title: "circuitId ",
    key: "raceName",
    render: (row: any) => {
      return <p>{row?.circuitId} </p>;
    },
  },
  {
    title: "circuitName",
    key: "circuitName",
    render: (row: any) => {
      return <p>{row?.circuitName} </p>;
    },
  },
  {
    title: "country",
    key: "country",
    render: (row: any) => {
      return <p>{row?.Location?.country} </p>;
    },
  },
  {
    title: "locality",
    key: "locality",
    render: (row: any) => {
      return <p>{row?.Location?.locality} </p>;
    },
  },
];
//
const columnDriver = [
  {
    title: "Name",
    key: "raceName",
    render: (row: any) => {
      return <p>{row.Driver?.givenName} </p>;
    },
  },
  {
    title: "nationality",
    key: "time",
    render: (row: any) => {
      return <p>{row.Driver?.nationality} </p>;
    },
  },
  {
    title: "points",
    key: "round",
    render: (row: any) => {
      return <p>{row?.points} </p>;
    },
  },
  {
    title: "dateOfBirth",
    key: "carbs",
    render: (row: any) => {
      return <p>{row?.Driver?.dateOfBirth} </p>;
    },
  },
  {
    title: "Team",
    key: "protein",
    render: (row: any) => {
      return <p>{row?.Constructors[0]?.name} </p>;
    },
  },
];

const columnFastest = [
  {
    title: "raceName",
    key: "raceName",
    render: (row: any) => {
      return <p>{row?.raceName} </p>;
    },
  },
  {
    title: "Year",
    key: "time",
    render: (row: any) => {
      return <p>{row?.season} </p>;
    },
  },
  {
    title: "points",
    key: "round",
    render: (row: any) => {
      return <p>{row?.Results[0]?.points} </p>;
    },
  },
  {
    title: "Name -Team",
    key: "carbs",
    render: (row: any) => {
      return (
        <p>
          {row?.Results[0]?.Driver?.givenName} -{row?.Results[0]?.Constructor?.name}
        </p>
      );
    },
  },
  {
    title: "rank",
    key: "rank",
    render: (row: any) => {
      return <p>{row?.Results[0]?.FastestLap?.rank} </p>;
    },
  },
  {
    title: "lap",
    key: "lap",
    render: (row: any) => {
      return <p>{row?.Results[0]?.FastestLap?.lap} </p>;
    },
  },
  {
    title: "Time",
    key: "Time",
    render: (row: any) => {
      return <p>{row?.Results[0]?.FastestLap?.Time?.time} </p>;
    },
  },
];
const MainLayout = (props: Props) => {
  const [data, Setdata] = useState<any[]>([]);
  const [loading, Setloading] = useState<boolean>(false);
  const [column, Setcolumn] = useState<
    { title: string; key: string; render: (value: any) => JSX.Element }[]
  >([]);
  const [title, Settitle] = useState<FormValues>({ type: "circuits", year: "2023" });
  const handleGetData = async (payload: any) => {
    try {
      Setloading(true);
      const data: any = await tmdbApi.getRaceList(payload);
      Setloading(false);
      Settitle(payload);
      const { type } = payload;
      switch (type) {
        case "drivers":
          Setdata(data.data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings || []);
          Setcolumn(columnDriver);
          break;
        case "circuits":
          Setdata(data.data?.MRData?.CircuitTable?.Circuits || []);
          Setcolumn(columnCircuits);
          break;
        case "constructors":
          Setdata(data.data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings || []);
          Setcolumn(columnTeam);
          break;
        case "fastest":
          Setdata(data.data?.MRData?.RaceTable?.Races || []);
          Setcolumn(columnFastest);
          break;

        default:
          break;
      }
    } catch (error) {
      Setloading(false);
      Setdata([]);
    }
  };

  useEffect(() => {
    handleGetData({ type: "circuits", year: "2023" });
  }, []);
  const handleRenderChart = (value: string) => {
    switch (value) {
      case "constructors":
        return <ChartTeam data={data} />;

      case "drivers":
        return <ChartDriver data={data} />;

      case "fastest":
        return <ChartFast data={data} />;

      default:
        return null
        break;
    }
  };
  return (
    <>
      <HeaderContainer />
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <FormSearch handleGetData={handleGetData} />
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Box sx={{ marginTop: "50px", padding: 1 }}>
          <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom style={{ textTransform: "uppercase" }}>
                {title.year}&nbsp;{title.type}&nbsp;RESULT
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {handleRenderChart(title.type)}

              {/* {title.type === "constructors" && <ChartTeam data={data} />}
              {title.type === "drivers" && <ChartDriver data={data} />} */}
            </Grid>
          </Grid>

          <BasicTable column={column} data={data} />
        </Box>
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default MainLayout;
