import { StrictMode } from "react";
import { getSalesVolumeMonitoring_DistributionOfTerminalSales } from "@/actions";
import MyTable, { regionName } from "@/components/MyTable";
import type { labelType } from "@/components/FilterDialogWithBreadcrumbs";
export type DistributionOfTerminalSalesArray = ReadonlyArray<labelType>;
const columns: ReadonlyArray<{
  readonly label: keyof labelType;
  readonly text: string;
  readonly format?: (value: number) => string;
}> = [
    { label: regionName, text: '单位' },
    { label: 'daySalesNum', text: '日销量' },
    {
      label: 'monthSalesNum',
      text: '月销量'
    },
    {
      label: 'monthRelativeRate',
      format: (value: number) => `${(value * 100).toLocaleString()}%`,
      text: '月销量环比'
    },
    {
      label: 'yearSalesNum',
      text: '年销量'
    },
  ];

export default function DistributionOfTerminalSales () {
  return (<StrictMode>
    <MyTable<labelType, {
      readonly level: number;
      readonly orgId: string;
    }> columns={columns} action={getSalesVolumeMonitoring_DistributionOfTerminalSales}
      noNeedAddress
      noNeedTime
    />
  </StrictMode>);
}