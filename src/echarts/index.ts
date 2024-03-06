import { init, type EChartsOption, getInstanceByDom } from 'echarts';
export type data = ReadonlyArray<{
  readonly value: number;
  readonly name: string;
}>;
interface EchartsConstructor {
  readonly dom: HTMLElement;
  readonly option?: EChartsOption;
  readonly data: data;
}
export default ({ dom, option, data }: EchartsConstructor) => {
  try {
    const chartInstance = getInstanceByDom(dom) ?? init(dom);
    chartInstance.setOption({
      animation: true,
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      // title: {
      // text: '',
      // subtext: '',
      // left: 'center'
      // },
      tooltip: {
        // trigger: 'item'
      },
      legend: {
        // top: '5%',
        // left: 'center',
        // orient: 'vertical',
      },
      ...option,
      series: {
        // name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        // avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {
          show: true
        },
        ...option?.series,
        data
      }
    });
    return chartInstance;
    // chartInstance.on('datazoom', function (params) {
    // });
  }
  catch (e) { console.error(e); return; }
};