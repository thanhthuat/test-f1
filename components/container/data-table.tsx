import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IbasicTable {
  column: { title: string; key: string; render: (value: any) => JSX.Element }[];
  data: any[];
}

const BasicTable: React.FC<IbasicTable> = ({ column, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {column.map((item) => {
              return <TableCell key={Math.floor(Math.random() * 1000)}>{item.title}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {column.map((item) => {
                return <TableCell key={Math.floor(Math.random() * 1010)}>{item?.render(row) ?? null}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default React.memo(BasicTable);
