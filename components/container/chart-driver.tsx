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


const groupBy = <T, Q>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, array) => {
    (acc[predicate(value, index, array)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
const ChartDriver: React.FC<IchartDriver> = ({ data }) => {
  let ar: any = groupBy(data, (item: any) => item.Constructors[0]?.name);
  let arrr = Object.keys(ar).map((item: any) => {
    const initialValue = 0;
    const sumWithInitial = ar[item].reduce(
      (accumulator: any, currentValue: any) =>
        parseInt(accumulator) + parseInt(currentValue.points),
      initialValue
    );
    return { name: item, point: sumWithInitial };
  });
  

  return (
    <Box sx={{ height: "500px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={arrr}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="point" barSize={20} fill="#413ea0" />
          {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default ChartDriver;
