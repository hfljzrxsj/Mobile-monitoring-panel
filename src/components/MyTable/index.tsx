import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import { useRef, useState } from "react";
import { StrictMode } from "react";
import classes from './_index.module.scss';
import * as classnames from 'classnames';
import { useRequest } from "ahooks";
import { unstable_batchedUpdates } from "react-dom";
import { commonUseRequestParams } from "@/App";
import { FilterDialogWithBreadcrumbs, unitNameAll, type FilterDialogIncludeButtonInstance, type noNeedSomething } from "../FilterDialogWithBreadcrumbs";
import { getInitParams, type requestType } from "@/actions";
export const regionName = 'regionName';
interface Type<T = {}, D extends requestType = requestType> extends noNeedSomething {
  readonly columns: ReadonlyArray<{
    readonly label: keyof T;
    readonly format?: (value: number) => string;
    readonly text: string;
  }>;
  readonly action: (e?: D) => Promise<ReadonlyArray<T & {
    readonly level?: number;
    readonly [regionName]?: string,
    readonly regionId?: string;
  }> | void>;
  readonly totalSum?: boolean;
}
const initArr = new Array(10).fill('');
const HB = '河北省';
export default function MyTable<T, D extends requestType = requestType> (props: Type<T, D>) {
  const { columns, action, noNeedTime, noNeedAddress, timeNeedDay, totalSum = false, ...others } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data: rows = initArr, loading, run } = useRequest(action, commonUseRequestParams);
  const ref = useRef<HTMLTableSectionElement>(null);
  const childRef = useRef<FilterDialogIncludeButtonInstance>(null);
  const noDataOrLoading = loading || !rows;
  const rowsSlice = (totalSum ? rows : rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)) ?? initArr;
  return (<StrictMode>
    <StyledEngineProvider injectFirst>
      <Paper
        className={classnames(classes["root"])}
        elevation={24}
        {...others}
      >
        <FilterDialogWithBreadcrumbs
          ref={childRef}
          //@ts-expect-error
          run={run}
          {...{ noNeedTime, noNeedAddress, timeNeedDay }}
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
              {rowsSlice.map((row, index) =>
                <TableRow hover key={index}>
                  {(noDataOrLoading || typeof row === 'string') ?
                    <td
                      colSpan={columns.length}
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
                          {...(regionName === label && index === 0 && Number(row.level) !== unitNameAll.length && {
                            onClick: () => {
                              childRef.current?.toDown({ regionId: row.regionId ?? getInitParams().orgId, [regionName]: row[regionName] ?? localStorage.getItem(regionName) ?? HB });
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
        {!totalSum && <TablePagination
          // rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows?.length ?? 10}
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
          labelDisplayedRows={(paginationInfo) => `${paginationInfo.from}-${isNaN(paginationInfo.to) ? 1 : paginationInfo.to}/共${paginationInfo.count ?? 0}项`}
          labelRowsPerPage='每页行数：'
        />}
      </Paper>

    </StyledEngineProvider>
  </StrictMode>);
}