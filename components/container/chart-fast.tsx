import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
interface IchartDriver {
  data: any[];
}
const data1 = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
const ChartFast: React.FC<IchartDriver> = ({ data }) => {
  
  let dataFormat = data.map((item) => {
    return {
      name: item?.Results[0]?.Driver?.givenName,
      lap: item.Results[0]?.FastestLap?.lap,
      points: parseInt(item?.Results[0]?.points),
    };
  });
  console.log("🚀 ~ file: chart-fast.tsx:83 ~ dataFormat ~ dataFormat:", dataFormat);
  return (
    <Box sx={{ height: "500px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={dataFormat}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="points" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="lap" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default React.memo(ChartFast);
