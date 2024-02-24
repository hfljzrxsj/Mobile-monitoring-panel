import { StrictMode } from "react";
import { getTOP10ModelInformation } from "@/actions";
import MyTable from "@/components/MyTable";

export interface TOP10ModelInformation_labelType {
  readonly phoneType: string;
  readonly salesNum: number;
  readonly rate: number;
  readonly priceLevel: string;
  readonly index: string;
}
// export const priceNameArr = ' '.repeat(10);
export default function TOP10ModelInformation () {
  return (<StrictMode>
    <MyTable<TOP10ModelInformation_labelType>
      columns={[{
        label: 'index',
        text: '销量排名'
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
        text: '销量'
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
    />
  </StrictMode>);
}