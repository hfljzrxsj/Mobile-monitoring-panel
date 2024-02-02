import echartsConstructor from "@/echarts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box, Tabs } from "@mui/material";
import { useMount, useUpdateEffect } from "ahooks";
import type { EChartsOption } from "echarts";
import React, { memo, useEffect, useRef } from "react";
import style from './_index.module.scss';
const { freeze } = Object;
const option: EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '顺差让利' },
        { value: 735, name: '分期合约' },
        { value: 580, name: '金币合约' },
        // { value: 484, name: 'Union Ads' },
        // { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
const chartsArr: ReadonlyArray<{
  readonly label: string;
  readonly option: EChartsOption;
}> = freeze([
  {
    // type: 'year',
    label: '日销量',
    option
  }, {
    // type: 'year',
    label: '月销量',
    option: {
      title: {
        // text: 'Referer of a Website',
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '顺差让利' },
            { value: 735, name: '分期合约' },
            { value: 580, name: '金币合约' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }, {
    // type: 'year',
    label: '年销量',
    option
  },
]);
const EchartsElement = memo((props: {
  readonly value: string;
}) => {
  const { value } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { current } = ref;
  useEffect(() => {
    setTimeout(() => {
      if (current || ref.current) {
        // for (const i of current.attributes) {
        //   const { name } = i;
        //   if (name !== 'class')
        //     current.removeAttribute(name);
        // }
        // for (const i of current.childNodes) {
        //   i.remove();
        // }
        echartsConstructor({
          dom: current ?? ref.current ?? document.createElement('div'), option: chartsArr[Number(value)]?.option ?? {}
        });
      }
    });
  }, [current]);
  return (<div ref={ref} className={style["echarts"]} />);
});
export default function TerminalActivitySalesStructure () {
  const [value, setValue] = React.useState('0');
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            centered
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue.toString());
            }}>{
              chartsArr.map((item, index) => <Tab value={index.toString()} label={item.label} />)
            }
            {/* <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        {chartsArr.map((item, index) => <TabPanel value={index.toString()} label={item.label} >
          <EchartsElement value={value} />
        </TabPanel>)}
      </TabContext>
    </Box>
  );
}