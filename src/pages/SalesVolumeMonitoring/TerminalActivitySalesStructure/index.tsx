import { getTerminalActivitySalesStructure } from "@/actions";
import { commonUseRequestParams } from "@/App";
import EchartsElement from "@/components/Echart";
import { FilterDialogWithBreadcrumbs, type FilterDialogIncludeButtonInstance } from "@/components/FilterDialogWithBreadcrumbs";
import { useRequest } from "ahooks";
import { StrictMode, useRef } from "react";
// const { freeze } = Object;
// const chartsArr = freeze([
//   {
//     type: 'day',
//     label: '日销量',
//   }, {
//     type: 'month',
//     label: '月销量',
//   }, {
//     type: 'year',
//     label: '年销量',
//   },
// ]);
export interface TerminalActivitySalesStructureActionProps {
  readonly type: string;
  readonly address: string;
}
export default function TerminalActivitySalesStructure () {
  // const [value, setValue] = useState('0');
  // const type = chartsArr[Number(value)]?.type ?? '';
  const { data, loading, run } = useRequest(getTerminalActivitySalesStructure, {
    ...commonUseRequestParams
  });
  // const noDataOrLoading = loading || !data;
  const childRef = useRef<FilterDialogIncludeButtonInstance>(null);
  return (
    <StrictMode>
      <FilterDialogWithBreadcrumbs
        ref={childRef}
        timeNeedDay
        run={run} />
      {/* <TabContext value={value}>
        <TabList
          centered
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue.toString());
          }}>{
            chartsArr.map((item, index) => <Tab value={index.toString()} label={item.label} key={index} />)
          }
        </TabList>
        <Divider /> */}
      {/* {chartsArr.map((_item, index) => <TabPanel
          value={index.toString()}
          className={classNames(noDataOrLoading ? style['loading'] : style["noLoading"])}
          key={index}
        > */}
      {/* <StrictMode> */}
      <EchartsElement data={data} loading={loading} />
      {/* {false ? <CircularProgress /> : <EchartsElement data={data} />} */}
      {/* </StrictMode> */}
      {/* </TabPanel>)}
      </TabContext> */}
    </StrictMode>
  );
}