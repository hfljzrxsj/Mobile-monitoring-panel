import { Paper, AppBar, Dialog, IconButton, Typography, Accordion, AccordionDetails, AccordionSummary, ToggleButton, ToggleButtonGroup, Collapse, Autocomplete, TextField, CircularProgress, Divider, Button, Fab, Breadcrumbs, Link } from "@mui/material";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { StrictMode } from "react";
import classes from './_index.module.scss';
import { useMount, useSetState } from "ahooks";
import { unstable_batchedUpdates } from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledButton } from "../AppBar";
import SendIcon from '@mui/icons-material/Send';
import classNames from "classnames";
import { getInitParams, getSalesVolumeMonitoring_DistributionOfTerminalSales, type requestType } from "@/actions";
import { getLevel, getLocalStorageFromJSON, level as levelString, orgId } from "@/actions/axios_instance";
import ReplyIcon from '@mui/icons-material/Reply';
import { regionName } from "../MyTable";
export interface labelType {
  readonly [regionName]: string,
  readonly regionId: string;
  readonly daySalesNum: number,
  readonly monthSalesNum: number,
  readonly monthRelativeRate: number,
  readonly yearSalesNum: number;
}
const { fromEntries } = Object;
const splitString = '-';
export const dateFormat = (now = new Date()) => now.getFullYear() + splitString + String(now.getMonth() + 1).padStart(2, '0') + splitString + String(now.getDate()).padStart(2, '0');
// const timeFormat = (...args: ReadonlyArray<string>) => args.map(i => i.replaceAll('-', '/')).join('-');
export const timeFormat = (s: string) => s.replaceAll(splitString, '/');
// const dateFromOldToNow = (n: number) => {
//   const now = new Date();
//   now.setDate(now.getDate() - n);
//   return timeFormat(dateFormat(now), dateFormat());
// };
const month = 'month';
const thisYear = new Date().getFullYear();
const thisMonth1 = (time: string) => `${time}-01`.slice(0, 10);
const ToggleButtonArr: ReadonlyArray<{
  readonly label: requestType["type"];
  readonly text: string;
}> = [{
  label: 'year',
  text: `${thisYear}年`,
  // value: dateFromOldToNow(90)
}, {
  label: month,
  text: '按月筛选',
  // value: dateFromOldToNow(30)
}, {
  label: 'day',
  text: '按日筛选',
}];
enum unitNameEnum {
  city = 'city_id',
  area = 'area_id',
  grid = 'grid_id',
  end = 'end_id'
}
interface unitNameType {
  readonly text: string;
  readonly label: unitNameEnum;
}
export const unitNameAll: ReadonlyArray<unitNameType> = [
  { text: '市', label: unitNameEnum.city },
  { text: '区县', label: unitNameEnum.area },
  { text: '网格', label: unitNameEnum.grid },
  { text: '营业厅', label: unitNameEnum.end }];
// type labelType = {
//   readonly id: string;
//   readonly label: string;
// } | null;
export type addressArrType = ReadonlyArray<labelType>;
const unUsedId = '-1';
const toAutoCompleteArr = (arr: addressArrType, s: string) => [{ [regionName]: `所有${s}`, regionId: unUsedId }, ...arr
  .map(i => ({ ...i, [regionName]: `${i?.[regionName]}${s}`, regionId: i.regionId ?? '0' }))
];
type addressUseSetStateType = Partial<Record<unitNameEnum, labelType>>;
export interface noNeedSomething {
  readonly noNeedTime?: boolean;
  readonly noNeedAddress?: boolean;
}
interface CurrentFilterShow extends noNeedSomething {
  readonly address: addressUseSetStateType;
  readonly hasDataIndex: number;
  // readonly isCustomTime: boolean;
  readonly time: string;
  readonly f: {
    readonly text?: string | undefined;
    readonly label?: string | undefined;
  } | undefined;
  readonly unitName: ReadonlyArray<unitNameType>;
  readonly setBreadcrumbsAddress: (e: number) => void;
}
const HB = '河北省';
const CurrentFilterShow = (props: CurrentFilterShow) => {
  const { address, hasDataIndex, time, f = undefined, noNeedTime = false, noNeedAddress = false, unitName = [], setBreadcrumbsAddress } = props;
  const allNeed = !noNeedTime && !noNeedAddress;
  const timeSplit = time.split(splitString);
  return <Paper className={classes['filterResult'] ?? ''} elevation={24}>
    {allNeed && <StrictMode><div>当前<wbr />筛选</div><span>{'{'}</span></StrictMode>}
    <div>
      <div>地理位置：
        <Breadcrumbs className={classes['Breadcrumbs'] ?? ''}>
          {Boolean(hasDataIndex) ? <Link
            onClick={() => { setBreadcrumbsAddress(-1); }}
          >{HB}</Link> : <span>{HB}</span>}
          {
            unitName.filter(i => address[i.label]).map(((i, index, arr) => (index === arr.length - 1 ?
              <span>{address[i.label]?.[regionName]}</span>
              : <Link
                key={index}
                onClick={() => {
                  setBreadcrumbsAddress(index);
                }}
              >{address[i.label]?.[regionName]}</Link>)))
          }
          {hasDataIndex >= 0 && <span>{`所有${unitName[hasDataIndex]?.text}`}</span>}
        </ Breadcrumbs>
      </div>
      {allNeed && <Divider />}
      {!noNeedTime && <p>时间范围：{(() => {
        // if (isCustomTime)
        //   return customTimeFormat;
        // else
        // return f?.text;
        const yearAndMonth = `${timeSplit[0]}年${timeSplit[1]}月`;
        switch (f?.label) {
          case ToggleButtonArr[0]?.label:
            return f.text;
          case ToggleButtonArr[1]?.label:
            return yearAndMonth;
          default:
            return `${yearAndMonth}${timeSplit[2] ?? '01'}日`;
        }
      })()}</p>}
    </div>
  </Paper>;
};
type FilterDialogIncludeButtonProps<T extends requestType = requestType> = {
  readonly run: (e?: T) => void;
  // readonly addressUseState?: [addressUseSetStateType, SetState<addressUseSetStateType>];
} & noNeedSomething;
export interface FilterDialogIncludeButtonInstance { toDown: (props: Pick<labelType, 'regionId' | 'regionName'>) => void; }
export const FilterDialogWithBreadcrumbs = forwardRef<FilterDialogIncludeButtonInstance, FilterDialogIncludeButtonProps>((props, ref) => {
  const level = Number(localStorage.getItem(levelString) ?? getLevel());
  const unitName: ReadonlyArray<unitNameType> = level ? unitNameAll.slice(level) : unitNameAll;
  const { run, noNeedTime = false, noNeedAddress = false } = props;
  const [alignment, setAlignment] = useState<requestType["type"]>(ToggleButtonArr[0]?.label);
  const [time, setTime] = useState(dateFormat());
  const [address, setAddress] = useSetState<
    addressUseSetStateType
  // { [P in unitNameEnum]: addressType }
  >(fromEntries(unitName.map(i => [i.label, null])));
  // useMount(() => {
  //   if (addressUseState)
  //     setAddress(initAddress);
  // });
  const [addressList, setAddressList] = useSetState<
    Partial<Record<unitNameEnum, addressArrType>>
  >(fromEntries(unitName.map(i => [i.label, []])));
  useMount(() => unstable_batchedUpdates(() => {
    getSalesVolumeMonitoring_DistributionOfTerminalSales({ level, orgId: getLocalStorageFromJSON(orgId) }).then(e => {
      const label0 = unitName[0]?.label;
      if (e && label0) {
        setAddressList({
          [label0]: e
        });
      }
    });
  }));
  const hasDataIndex = unitName.findIndex(i => !address[i.label]);
  const f = ToggleButtonArr.find(i => i.label === alignment);
  // const isCustomTime = f?.label === custom;
  const [click, setClick] = useState(false);
  const setBreadcrumbsAddress: CurrentFilterShow["setBreadcrumbsAddress"] = useCallback((index) => unstable_batchedUpdates(() => {
    setAddress(fromEntries(unitName.filter((_i, ind) => ind > index).map(i => [i.label, null])));
    setClick(true);
  }), []);
  const filterResultShow: CurrentFilterShow = {
    address, hasDataIndex, time, f, noNeedAddress, noNeedTime, unitName, setBreadcrumbsAddress
  };
  const [filterOpen, setFilterOpen] = useState(false);
  const [requestFilterResultShow, setRequestFilterResultShow] = useState<CurrentFilterShow>(filterResultShow);
  useEffect(() => unstable_batchedUpdates(() => {
    if (click) {
      run({
        ...(!noNeedTime && { date: alignment === ToggleButtonArr[0]?.label ? timeFormat(`${thisYear + splitString}01${splitString}01`) : timeFormat(thisMonth1(time)), ...(alignment && { type: alignment }) }),
        orgId:
          [getInitParams().orgId, ...unitName.filter(i => address[i.label]).map(i => address[i.label]?.regionId)].join('.')
        , level: hasDataIndex < 0 ? unitNameAll.length - 1 : hasDataIndex
        // ...((() => {
        //   // const label = unitName[hasDataIndex - 1]?.label;
        //   if (!noNeedAddress)
        //     return {
        //       regionId:
        //         [getInitParams().regionId, ...unitName.filter(i => address[i.label]).map(i => address[i.label]?.id)].join('.')
        //       , level: hasDataIndex < 0 ? unitNameAll.length - 1 : hasDataIndex
        //     };
        //   else
        //     return {};
        // })())
      });
      setRequestFilterResultShow(filterResultShow);
      setFilterOpen(false);
      setClick(false);
    }
  }), [click]);
  useImperativeHandle(ref, () => ({
    toDown: (props) => unstable_batchedUpdates(() => {
      if (!props)
        return;
      const { regionName, regionId } = props;
      const k = unitName[hasDataIndex]?.label;
      if (k) {
        setAddress({ [k]: { regionId, regionName } });
        // getAddressListData(hasDataIndex, regionId);
        setClick(true);
      }
    }),
  }));
  // const getAddressListData = (level: number, regionId: string) => {
  //   getSalesVolumeMonitoring_DistributionOfTerminalSales({ level, regionId }).then(e => {
  //     const curLabel = unitName[level + 1]?.label;
  //     if (e && curLabel)
  //       setAddressList({
  //         [curLabel]: e
  //       });
  //   });
  // };
  return <StrictMode><div className={classes['CurrentFilterShow']}>
    {(!noNeedAddress) && <Button
      variant="contained"
      size="large"
      onClick={setFilterOpen.bind(null, true)}
    >筛选器</Button>}
    {Boolean(requestFilterResultShow.hasDataIndex) && <Fab variant="extended" color="primary"
      onClick={() => unstable_batchedUpdates(() => {
        const setNullNumber = hasDataIndex > -1 ? hasDataIndex - 1 : unitName.length - 1;
        const label = unitName[setNullNumber]?.label;
        if (label) {
          setAddress({ [label]: null });
          setClick(true);
        }
      })}
    >
      <ReplyIcon />返回上级
    </Fab>}
    <CurrentFilterShow
      {...requestFilterResultShow}
    />
  </div><Dialog
    open={filterOpen}
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
          onClick={setFilterOpen.bind(null, false)}
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
          onClick={() => {
            setClick(true);
          }}
        >
          确定
        </StyledButton>
      </AppBar>
      <CurrentFilterShow
        {...filterResultShow}
      />
      {!noNeedAddress && <Accordion defaultExpanded elevation={24}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes['AccordionSummary'] ?? ''}
        >
          <Typography>地理范围筛选</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes['AccordionDetails'] ?? ''}>
          {(unitName.map((item, index) => {
            if (hasDataIndex >= 0 && index > hasDataIndex)
              return <></>;
            const { label } = item;
            // if (!addressList) {
            //   return <></>;
            // }
            const currentAddressList = addressList[label];
            if (!currentAddressList) {
              return <></>;
            }
            const options = toAutoCompleteArr(currentAddressList, item.text);
            const loading = !currentAddressList.length;
            return <Autocomplete
              key={index}
              disablePortal
              autoSelect
              autoComplete
              autoFocus
              autoHighlight
              loading={loading}
              options={options}
              getOptionLabel={e => e?.regionName ?? ''}
              // renderOption={(_props, options,) => options.label}
              isOptionEqualToValue={(option, value) => option.regionId === value.regionId}
              onChange={(_e, v) => unstable_batchedUpdates(() => {
                setAddress(fromEntries(unitName.filter((_item, ind) => ind >= index).map(i => [i.label, null])));
                const regionId = v?.regionId;
                // if (id === unUsedId || !v) {
                //   // const obj: typeof address = {};
                //   // unitName.filter((_item, ind) => ind < index).reduce(
                //   //   (pre, cur) => {
                //   //   pre[cur.label] = null;
                //   // }, obj);
                //   return;
                // }
                setAddress({
                  [label]: v
                });
                if (index !== unitName.length - 1 && regionId) {
                  // getAddressListData(index, id);
                  getSalesVolumeMonitoring_DistributionOfTerminalSales({ level: level + index + 1, orgId: regionId }).then(e => {
                    const curLabel = unitName[index + 1]?.label;
                    if (e && curLabel)
                      setAddressList({
                        [curLabel]: e
                      });
                  });
                }

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
              renderInput={({ size, InputProps, ...params }) =>
                //@ts-expect-error
                <TextField
                  {...{
                    ...(size && { size }),
                    ...params
                  }}
                  InputProps={{
                    ...InputProps,
                    endAdornment: (
                      <StrictMode>
                        {loading ? <CircularProgress /> : null}
                        {InputProps.endAdornment}
                      </StrictMode>
                    ),
                  }}
                  label={`请选择${item.text}`} />}
              noOptionsText='无此选项'
            />;
          }))}
        </AccordionDetails>
      </Accordion>}
      {!noNeedTime && <Accordion defaultExpanded elevation={24}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes['AccordionSummary'] ?? ''}
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
                value={item.label ?? ''}
                key={index}
              >{item.text}</ToggleButton>)
            }
          </ToggleButtonGroup>
          <Collapse in={alignment !== ToggleButtonArr[0]?.label}>
            <label
              className={classNames(classes["date"])} >请选择周期：<input
                type={(() => {
                  switch (alignment) {
                    case ToggleButtonArr[2]?.label:
                      return 'date';
                    case ToggleButtonArr[1]?.label:
                      return month;
                    default:
                      return 'hidden';
                  }
                })()}
                value={(() => {
                  switch (alignment) {
                    case ToggleButtonArr[1]?.label:
                      return time.slice(0, 7);
                    default:
                      return thisMonth1(time);
                  }
                })()}
                onChange={e => {
                  setTime(e.target.value);
                }}
                max={(() => {
                  switch (alignment) {
                    case ToggleButtonArr[1]?.label:
                      return dateFormat().slice(0, 7);
                    default:
                      return dateFormat();
                  }
                })()}
              /></label>
          </Collapse>
        </AccordionDetails>
      </Accordion>}
    </Dialog></StrictMode>;
});