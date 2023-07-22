import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string | number,
  calories: number | null,
  fat: number | null,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(0.0, 0.7945, 0.9355, 0.8593, 62),
  createData(1.0, 0.9216, 0.7581, 0.8319, 62),
  createData('accuracy', null, null, 0.8468, 124),
  createData('macro avg', 0.8580, 0.8468, 0.8456, 124),
  createData('weighted avg', 0.8580, 0.8468, 0.8456, 124),
];

export default function CustomizedTables(): JSX.Element {
  return (
    <React.StrictMode>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 550 }}
          aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>&nbsp;</StyledTableCell>
              <StyledTableCell align='center'>{'precision'}</StyledTableCell>
              <StyledTableCell align='center'>{'recall'}</StyledTableCell>
              <StyledTableCell align='center'>{'f1-score'}</StyledTableCell>
              <StyledTableCell align='center'>{'support'}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.calories}</StyledTableCell>
                <StyledTableCell align='center'>{row.fat}</StyledTableCell>
                <StyledTableCell align='center'>{row.carbs}</StyledTableCell>
                <StyledTableCell align='center'>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>{'Accuracy of the network is: 84.6774 %'}</p>
    </React.StrictMode>
  );
}
