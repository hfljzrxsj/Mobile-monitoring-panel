import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React, { useState, type ChangeEvent } from "react";
import { StrictMode } from "react";
import classes from './_index.module.scss';
import classnames from 'classnames';
import { useMount, useRequest } from "ahooks";
import { getSalesVolumeMonitoring_DistributionOfTerminalSales } from "@/actions";

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}


interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData (name: string, code: string, population: number, size: number): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];
interface DistributionOfTerminalSales {
  readonly unit: string,
  readonly day: number,
  readonly month: number,
  readonly monthONmonth: number,
  readonly year: number;
}
export type DistributionOfTerminalSalesArray = ReadonlyArray<DistributionOfTerminalSales>;
const columns: ReadonlyArray<{
  readonly label: keyof DistributionOfTerminalSales;
  readonly text: string;
  readonly format?: (value: number) => string;
}> = [
    { label: 'unit', minWidth: 170, text: '单位' },
    { label: 'day', minWidth: 100, text: '日销量' },
    {
      label: 'month',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
      text: '月销量'
    },
    {
      label: 'monthONmonth',
      minWidth: 170,
      align: 'right',
      format: (value: number) => `${value.toLocaleString('en-US')}%`,
      text: '月销量环比'
    },
    {
      label: 'year',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toFixed(2),
      text: '年销量'
    },
  ];

export default function DistributionOfTerminalSales () {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [rows, setRows] = useState<DistributionOfTerminalSales>([]);
  // useMount(() => {
  //   getSalesVolumeMonitoring_DistributionOfTerminalSales().then(e => setRows(e));
  // });
  const { data: rows = [], error, loading } = useRequest(getSalesVolumeMonitoring_DistributionOfTerminalSales);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (<StrictMode>
    <StyledEngineProvider injectFirst>
      <Paper className={classnames(classes["root"])}>
        <TableContainer className={classnames(classes["container"])}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align='center'
                  // align={column.align ?? "right"}
                  // style={{ minWidth: column.minWidth }}
                  >
                    {column.text}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.label];
                      return (
                        <TableCell key={index}
                          align='center'
                        // align={column.align ?? "right"}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          // getItemAriaLabel={(type) => type}
          labelDisplayedRows={(paginationInfo) => `${paginationInfo.from}-${paginationInfo.to}/共${paginationInfo.count}项`}
          labelRowsPerPage='每页行数：'
        />
      </Paper>
    </StyledEngineProvider>
  </StrictMode>);
}