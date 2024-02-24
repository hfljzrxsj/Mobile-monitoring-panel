import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import { useRef, useState } from "react";
import { StrictMode } from "react";
import classes from './_index.module.scss';
import classnames from 'classnames';
import { useRequest } from "ahooks";
import { unstable_batchedUpdates } from "react-dom";
import { commonUseRequestParams } from "@/App";
import { FilterDialogWithBreadcrumbs, unitNameAll, type TT, type FilterDialogIncludeButtonInstance, type noNeedSomething } from "../FilterDialogWithBreadcrumbs";
export const regionName = 'regionName';
interface Type<T = {}, D extends TT = TT> extends noNeedSomething {
  readonly columns: ReadonlyArray<{
    readonly label: keyof T;
    readonly format?: (value: number) => string;
    readonly text: string;
  }>;
  readonly action: (e?: D) => Promise<ReadonlyArray<T & {
    readonly level?: number;
  }> | void>;
}
export default function MyTable<T, D extends TT = TT> (props: Type<T, D>) {
  const { columns, action, noNeedTime, noNeedAddress } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data: rows = [], loading, run } = useRequest(action, commonUseRequestParams);
  const ref = useRef<HTMLTableSectionElement>(null);
  const childRef = useRef<FilterDialogIncludeButtonInstance>(null);
  return (<StrictMode>
    <StyledEngineProvider injectFirst>
      <Paper
        className={classnames(classes["root"])}
        elevation={24}
      >
        <FilterDialogWithBreadcrumbs
          ref={childRef}
          //@ts-expect-error
          run={run}
          {...{ noNeedTime, noNeedAddress }}
        />
        <TableContainer
        >
          <Table stickyHeader>
            <TableHead
              ref={ref}
            >
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align='center'
                  >
                    {column.text}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) =>
                <TableRow hover key={index}>
                  {loading ?
                    <td
                      colspan={columns.length}
                      className={classes['Skeleton'] ?? ''}
                      //@ts-expect-error
                      style={{ '--height': `${ref.current?.clientHeight}px` }}
                    ><Skeleton
                        variant="rounded"
                        animation="wave"
                      /></td> :
                    (columns.map((column, index) => {
                      const label = column?.label;
                      const value = row?.[label];
                      return (
                        <TableCell
                          key={index}
                          align='center'
                          {...(regionName === label && index === 0 && Number(row.level) !== unitNameAll.length - 1 && {
                            onClick: () => {
                              childRef.current?.toDown({ regionId: '0', [regionName]: 'A市' });
                            },
                            className: classes['aLink'] ?? ''
                          })}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : String(value)}
                        </TableCell>
                      );
                    }))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_event, newPage) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(event) => unstable_batchedUpdates(() => {
            setRowsPerPage(+event.target.value);
            setPage(0);
          })}
          // getItemAriaLabel={(type) => type}
          labelDisplayedRows={(paginationInfo) => `${paginationInfo.from}-${paginationInfo.to}/共${paginationInfo.count}项`}
          labelRowsPerPage='每页行数：'
        />
      </Paper>

    </StyledEngineProvider>
  </StrictMode>);
}