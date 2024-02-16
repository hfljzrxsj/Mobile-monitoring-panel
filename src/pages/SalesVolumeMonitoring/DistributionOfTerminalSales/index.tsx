import { StrictMode } from "react";
import { getSalesVolumeMonitoring_DistributionOfTerminalSales } from "@/actions";
import MyTable from "@/components/MyTable";
interface labelType {
  readonly unit: string,
  readonly day: number,
  readonly month: number,
  readonly monthONmonth: number,
  readonly year: number;
}
export type DistributionOfTerminalSalesArray = ReadonlyArray<labelType>;
const columns: ReadonlyArray<{
  readonly label: keyof labelType;
  readonly text: string;
  readonly format?: (value: number) => string;
}> = [
    { label: 'unit', text: '单位' },
    { label: 'day', text: '日销量' },
    {
      label: 'month',
      text: '月销量'
    },
    {
      label: 'monthONmonth',
      format: (value: number) => `${value.toLocaleString()}%`,
      text: '月销量环比'
    },
    {
      label: 'year',
      text: '年销量'
    },
  ];

export default function DistributionOfTerminalSales () {

  return (<StrictMode>
    <MyTable<labelType> columns={columns} action={getSalesVolumeMonitoring_DistributionOfTerminalSales} />
  </StrictMode>);
}