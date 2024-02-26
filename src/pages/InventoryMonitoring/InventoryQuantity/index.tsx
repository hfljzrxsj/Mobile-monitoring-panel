import { getTOP10ModelInformation } from "@/actions";
import MyTable from "@/components/MyTable";
import type { TOP10ModelInformation_labelType } from "@/pages/SalesVolumeMonitoring/TOP10ModelInformation";
import { StrictMode } from "react";

export default function InventoryQuantity () {
  return <StrictMode><MyTable<TOP10ModelInformation_labelType>
    columns={[{
      label: 'index',
      text: '库存排序'
    },
    {
      label: 'phoneType', text: '机型名称',
      // format: (value: number) => {
      //   if (value === 5000) {
      //     return `5000元以上`;
      //   }
      //   return `${value.toLocaleString()}元`;
      // },
    },
    {
      label: 'salesNum',
      text: '库存数量'
    },
    { label: 'rate', text: '占比', format: (value: number) => `${value.toLocaleString()}%`, },
    {
      label: 'priceLevel',
      text: '价格段'
    },
    ]}
    action={(e) => getTOP10ModelInformation(e).then(e => {
      if (!e)
        return [];
      return [...e, {
        index: '',
        phoneType: '合计',
        salesNum: e.filter(i => Boolean(i)).reduce((previousValue, currentValue) => previousValue + currentValue?.salesNum, 0),
        rate: 100,
        priceLevel: ''
      }];
    })}
    totalSum
  /></StrictMode>;
}