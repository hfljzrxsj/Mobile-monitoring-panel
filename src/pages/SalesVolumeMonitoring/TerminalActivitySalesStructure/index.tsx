import { getTerminalActivitySalesStructure, type typeType } from "@/actions";
import { commonUseRequestParams } from "@/App";
import echartsConstructor from "@/echarts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Divider, CircularProgress } from "@mui/material";
import { useRequest } from "ahooks";
import classNames from "classnames";
import React, { memo, StrictMode, useEffect, useRef } from "react";
import style from './_index.module.scss';
const { freeze } = Object;
const chartsArr = freeze([
  {
    type: 'day',
    label: '日销量',
  }, {
    type: 'month',
    label: '月销量',
  }, {
    type: 'year',
    label: '年销量',
  },
]);
const EchartsElement = memo((props: typeType) => {
  const { type } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { current } = ref;
  const { data, loading } = useRequest(getTerminalActivitySalesStructure.bind(null, { type }), commonUseRequestParams);
  useEffect(() => {
    setTimeout(() => {
      if ((current || ref.current) && data) {
        // for (const i of current.attributes) {
        //   const { name } = i;
        //   if (name !== 'class')
        //     current.removeAttribute(name);
        // }
        // for (const i of current.childNodes) {
        //   i.remove();
        // }
        try {
          echartsConstructor({
            dom: current ?? ref.current ?? document.createElement('div'), data
          });
        }
        catch { }
      }
    });
  }, [current, data]);
  return (<div
    ref={ref}
    className={classNames(style["echarts"], { [style['loading'] ?? '']: (loading) })}
    //@ts-expect-error
    style={{ '--offsetTop': `${current?.offsetTop}px` }} >
    {(loading) && <CircularProgress />}
  </div>);
});
export default function TerminalActivitySalesStructure () {
  const [value, setValue] = React.useState('0');
  return (
    <StrictMode>
      <TabContext value={value}>
        <TabList
          centered
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue.toString());
          }}>{
            chartsArr.map((item, index) => <Tab value={index.toString()} label={item.label} />)
          }
        </TabList>
        <Divider />
        {chartsArr.map((item, index) => <TabPanel value={index.toString()} className={style["TabPanel"] ?? ''}>
          <EchartsElement type={item.type} />
        </TabPanel>)}
      </TabContext>
    </StrictMode>

  );
}