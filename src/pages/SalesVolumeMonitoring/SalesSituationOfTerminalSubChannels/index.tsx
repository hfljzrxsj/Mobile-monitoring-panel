import { StrictMode } from "react";
import { getSalesVolumeMonitoring_SalesSituationOfTerminalSubChannels } from "@/actions";
import MyTable from "@/components/MyTable";
import type { labelType } from "@/components/FilterDialogWithBreadcrumbs";
export interface SalesSituationOfTerminalSubChannels_labelType {
  readonly channelType: string;
  readonly channelNums: number;
  readonly saleChannelsNum: number;
  readonly saleChannelsRatio: number;
  readonly validChannelsNum: number;
  readonly validChannelsRatio: number;
}
export type DistributionOfTerminalSalesArray = ReadonlyArray<labelType>;
const percentageFormat = (value: number) => `${(value * 100).toLocaleString()}%`;
const columns: ReadonlyArray<{
  readonly label: keyof SalesSituationOfTerminalSubChannels_labelType;
  readonly text: string;
  readonly format?: (value: number) => string;
}> = [
    { label: 'channelType', text: '渠道类型' },
    { label: 'channelNums', text: '渠道数量' },
    {
      label: 'saleChannelsNum',
      text: '有销渠道数量'
    },
    {
      label: 'saleChannelsRatio',
      format: percentageFormat,
      text: '有销渠道占比'
    },
    {
      label: 'validChannelsNum',
      text: '有效渠道数量'
    },
    {
      label: 'validChannelsRatio',
      text: '有效渠道占比',
      format: percentageFormat,
    },
  ];

export default function SalesSituationOfTerminalSubChannels () {
  return <StrictMode
  ><MyTable<SalesSituationOfTerminalSubChannels_labelType> columns={columns} action={getSalesVolumeMonitoring_SalesSituationOfTerminalSubChannels}
    /></StrictMode>;
}