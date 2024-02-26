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
    { label: 'daySalesNum', text: '日订货量' },
    {
      label: 'monthSalesNum',
      text: '月订货量'
    },
    {
      label: 'monthRelativeRate',
      format: (value: number) => `${(value * 100).toLocaleString()}%`,
      text: '月订货量环比'
    },
    {
      label: 'yearSalesNum',
      text: '年订货量'
    },
  ];

export default function OrderQuantityOfMobileTerminals () {
  return (<StrictMode>
    <MyTable<labelType> columns={columns} action={getSalesVolumeMonitoring_DistributionOfTerminalSales}
      noNeedAddress
      noNeedTime
    />
  </StrictMode>);
}