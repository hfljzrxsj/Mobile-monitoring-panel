import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, AppBar, Dialog, IconButton, Typography, Accordion, AccordionDetails, AccordionSummary, ToggleButton, ToggleButtonGroup, Collapse, Autocomplete, TextField } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import { useRef, useState } from "react";
import { StrictMode } from "react";
import classes from './_index.module.scss';
import classnames from 'classnames';
import { useMount, useRequest, useSetState, useUpdateEffect } from "ahooks";
import { unstable_batchedUpdates } from "react-dom";
import { commonUseRequestParams } from "@/App";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledButton } from "../AppBar";
import SendIcon from '@mui/icons-material/Send';
import classNames from "classnames";
import { getAddressList } from "@/actions";
interface Type<T = {}> {
  readonly columns: ReadonlyArray<{
    readonly label: keyof T;
    readonly text: string;
    readonly format?: (value: number) => string;
  }>;
  readonly action: () => Promise<ReadonlyArray<T> | void>;
}
const ToggleButtonArr = [{
  label: 'threeMonth',
  text: '近三个月',
}, {
  label: 'thirtyDay',
  text: '近30天',
}, {
  label: 'custom',
  text: '自定义',
}];
const nowDate = new Date().toLocaleDateString().replaceAll('/', '-');
enum unitNameEnum {
  city = 'city_id',
  area = 'area_id',
  grid = 'grid_id',
  end = 'end_id'
}
const unitName: ReadonlyArray<{
  readonly text: string;
  readonly label: unitNameEnum;
}> = [
    { text: '市', label: unitNameEnum.city },
    { text: '区县', label: unitNameEnum.area },
    { text: '网格', label: unitNameEnum.grid },
    { text: '营业厅', label: unitNameEnum.end }];
type addressType = {
  readonly id: string;
  readonly label: string;
} | null;
export type addressArrType = ReadonlyArray<addressType>;
const unUsedId = '-1';
const toAutoCompleteArr = (arr: addressArrType, s: string) => [{ label: `所有${s}`, id: unUsedId }, ...arr
  .map(i => ({ ...i, label: `${i?.label}${s}`, id: i?.id ?? '0' }))
];
export default function MyTable<T> (props: Type<T>) {
  const { columns, action } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data: rows = [], loading } = useRequest(action, commonUseRequestParams);
  const ref = useRef<HTMLTableSectionElement>(null);
  const [alignment, setAlignment] = useState(ToggleButtonArr[0]?.label);
  const [time, setTime] = useSetState({
    start: nowDate,
    end: nowDate,
  });
  const [address, setAddress] = useSetState<
    Partial<Record<unitNameEnum, addressType>>
  // { [P in unitNameEnum]: addressType }
  >(Object.fromEntries(unitName.map(i => [i.label, null])));
  const [addressList, setAddressList] = useSetState<
    Partial<Record<unitNameEnum, addressArrType>>
  // { [P in unitNameEnum]: addressType }
  >(Object.fromEntries(unitName.map(i => [i.label, []])));
  // const { data: addressList, run } = useRequest((id) => getAddressList({ ...id && { id } }), {
  //   ...commonUseRequestParams,
  //   // manual: index !== 0,
  //   // cacheKey: id ?? ''
  // });
  useUpdateEffect(() => {
    for (let i = unitName.length - 1; i > 1; i--) {
      const preLabel = unitName[i - 1]?.label;
      const preAddress = preLabel ? address[preLabel] : null;
      if (preAddress) {
        // run(preAddress?.label + preAddress?.id);
        break;
      }
    }
  }, [address]);
  console.log(address);
  useMount(() => {
    getAddressList({}).then(e => {
      const label0 = unitName[0]?.label;
      if (e && label0)
        setAddressList({
          [label0]: e
        });
    });
  });
  const hasDataIndex = unitName.findIndex(i => !address[i.label]);
  return (<StrictMode>
    <StyledEngineProvider injectFirst>
      <Paper
        className={classnames(classes["root"])}
        elevation={24}
      >
        <TableContainer
        // className={classnames(classes["container"])}
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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
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
                        const value = row?.[column?.label];
                        return (
                          <TableCell
                            key={index}
                            align='center'
                          >
                            {column.format && typeof value === 'number' ? column.format(value) : String(value)}
                          </TableCell>
                        );
                      }))}
                  </TableRow>
                );
              })}
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
      <Dialog
        open={true}
        fullScreen
      >
        <AppBar
          className={classes['AppBar'] ?? ''}
          position="sticky"
        >
          <IconButton
            size='large'
            className={classes['menuIcon'] ?? ''}
          // edge="start"
          // color="inherit"
          // onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography>
            筛选器
          </Typography>
          <StyledButton
            autoFocus
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
          // onClick={handleClose}
          >
            确定
          </StyledButton>
        </AppBar>
        <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>地理范围筛选</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {(unitName.map((item, index) => {
                // const preLabel = arr[index - 1]?.label;
                // const preAddress = preLabel ? address[preLabel] : null;
                // if (index && (!preLabel || preAddress === null)) {
                //   return <></>;
                // }
                if (hasDataIndex >= 0 && index > hasDataIndex)
                  return <></>;
                const { label } = item;
                if (!addressList) {
                  return <></>;
                }
                const currentAddressList = addressList[label];
                if (!currentAddressList) {
                  return <></>;
                }
                const options = toAutoCompleteArr(currentAddressList, item.text);
                return <Autocomplete
                  key={index}
                  disablePortal
                  autoSelect
                  autoComplete
                  autoFocus
                  autoHighlight
                  options={options}
                  getOptionLabel={e => e?.label ?? ''}
                  // renderOption={(_props, options,) => options.label}
                  onChange={(_e, v) => unstable_batchedUpdates(() => {
                    setAddress(Object.fromEntries(unitName.filter((_item, ind) => ind >= index).map(i => [i.label, null])));
                    const id = v?.id;
                    if (id === unUsedId || !v) {
                      // const obj: typeof address = {};
                      // unitName.filter((_item, ind) => ind < index).reduce(
                      //   (pre, cur) => {
                      //   pre[cur.label] = null;
                      // }, obj);
                      return;
                    }
                    setAddress({
                      [label]: v
                    });
                    if (index !== unitName.length - 1 && id)
                      getAddressList({ id: `${id} ${index + 1}` }).then(e => {
                        const curLabel = unitName[index + 1]?.label;
                        if (e && curLabel)
                          setAddressList({
                            [curLabel]: e
                          });
                      });
                    // run(v?.id);
                  })}
                  value={address[label] ?? options[0] ?? null}
                  // componentsProps
                  // filterOptions
                  // endAttchmentProps
                  // onChange
                  // ListboxProps
                  // classes
                  // popupIcon
                  // closeText
                  // openText
                  renderInput={({ size, ...params }) =>
                    //@ts-expect-error
                    <TextField
                      {...{
                        ...(size && { size }),
                        ...params
                      }}
                      label={`请选择${item.text}`} />}
                  noOptionsText='无此选项'
                />;
              }))}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>时间范围筛选</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={(
                  _event,
                  newAlignment,
                ) => {
                  setAlignment(prevState => newAlignment ?? prevState);
                }}
                className={classes['ToggleButtonGroup'] ?? ''}
              >{
                  ToggleButtonArr.map((item, index) => <ToggleButton
                    value={item.label}
                    key={index}
                  >{item.text}</ToggleButton>)
                }

              </ToggleButtonGroup>
              <Collapse
                in={alignment === ToggleButtonArr[2]?.label}
              >
                <div
                  className={classNames(classes["date"]
                    , {
                      // [classes['show'] ?? '']: alignment === ToggleButtonArr[2]?.label
                    })}>
                  <label>开始日期：<input
                    type='date'
                    value={time.start}
                    onChange={e => {
                      const { value } = e.target;
                      setTime({
                        start: value
                      });
                    }}
                  /></label>
                  <label>结束日期：<input
                    type='date'
                    value={time.end}
                    onChange={e => {
                      const { value } = e.target;
                      setTime({
                        end: value
                      });
                    }}
                  /></label>
                </div>
              </Collapse>
            </AccordionDetails>
          </Accordion>
        </div>
      </Dialog>
    </StyledEngineProvider>
  </StrictMode>);
}