import { init, type EChartsOption } from 'echarts';
interface EchartsConstructor {
  readonly dom: HTMLElement;
  readonly option: EChartsOption;
}
export default function echartsConstructor ({ dom, option }: EchartsConstructor) {
  init(dom)?.setOption(option);
}