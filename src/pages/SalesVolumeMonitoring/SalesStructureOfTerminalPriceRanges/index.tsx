import { StrictMode } from "react";
import { getInitParamsIncludeType, getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges } from "@/actions";
import MyTable from "@/components/MyTable";

interface labelType {
  readonly price: string;
  readonly salesVolume: number;
  readonly proportion: number;
}
// export const priceNameArr = ['0-1000元', '1000-2000元', '2000-3000元', '3000-4000元', '4000-5000元', '5000元以上'];
export const priceNameArr = [...' '.repeat(4).split(' ').map((_i, ind) => `${ind * 1000}-${ind * 1000 + 1000}元`), '5000元以上'];
export default function SalesStructureOfTerminalPriceRanges () {
  return (<StrictMode>
    <MyTable<labelType>
      columns={[
        {
          label: 'price', text: '机型价位段',
          // format: (value: number) => {
          //   if (value === 5000) {
          //     return `5000元以上`;
          //   }
          //   return `${value.toLocaleString()}元`;
          // },
        },
        { label: 'salesVolume', text: '销量' },
        {
          label: 'proportion',
          format: (value: number) => `${value.toLocaleString()}%`,
          text: '占比'
        },
      ]}
      action={(e) => getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges(e ?? getInitParamsIncludeType()).then(e => {
        if (!e)
          return [];
        return [...e, {
          price: '合计',
          salesVolume: e.reduce((previousValue, currentValue) => previousValue + currentValue.salesVolume, 0),
          proportion: 100
        }];
      })}
    />
  </StrictMode>);
}