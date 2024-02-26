import { getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges } from "@/actions";
import { commonUseRequestParams } from "@/App";
import EchartsElement from "@/components/Echart";
import { FilterDialogWithBreadcrumbs, type FilterDialogIncludeButtonInstance } from "@/components/FilterDialogWithBreadcrumbs";
import { useRequest } from "ahooks";
import { StrictMode, useRef } from "react";
export interface TerminalActivitySalesStructureActionProps {
  readonly type: string;
  readonly address: string;
}
export default function InventoryStructure () {
  const { data, loading, run } = useRequest(() => getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges().then(e => e ? Object.entries(e).map(i => ({ value: i[1].salesNum ?? 0, name: i[0] })) : []), {
    ...commonUseRequestParams
  });
  const childRef = useRef<FilterDialogIncludeButtonInstance>(null);
  return (
    <StrictMode>
      <FilterDialogWithBreadcrumbs
        ref={childRef}
        timeNeedDay
        run={run} />
      <EchartsElement data={data} loading={loading} />
    </StrictMode>
  );
}