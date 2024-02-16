import { StrictMode } from "react";
import { getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges } from "@/actions";
import MyTable from "@/components/MyTable";

interface labelType {
  readonly price: string;
  readonly salesVolume: number;
  readonly proportion: number;
}
export type SalesStructureOfTerminalPriceRangesArray = ReadonlyArray<labelType>;
export default function SalesStructureOfTerminalPriceRanges () {
  return (<StrictMode>
    <MyTable<labelType>
      columns={[
        {
          label: 'price', text: '机型价位段',
          format: (value: number) => {
            if (value === 5000) {
              return `5000元以上`;
            }
            return `${value.toLocaleString()}元`;
          },
        },
        { label: 'salesVolume', text: '销量' },
        {
          label: 'proportion',
          format: (value: number) => `${value.toLocaleString()}%`,
          text: '占比'
        },
      ]}
      action={() => getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges().then(e => {
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