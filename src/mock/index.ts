// 引入mockjs  
import { mock } from 'mockjs';
// const { integer, float } = Random;
const { random } = Math;
// 定义模拟数据  
mock('/api/SalesVolumeMonitoring/DistributionOfTerminalSales', 'get', {
  "code": 1000,
  "data|1-50": [
    {
      "unit": "@city",
      "day": ~~(random() * 10),
      "month": ~~(random() * 100),
      "monthONmonth": (random() - 0.5) * 10,
      "year": ~~(random() * 1000)
    }
  ]
});
mock('/api/SalesVolumeMonitoring/TerminalActivitySalesStructure?type=year', 'get', {
  "code": 1000,
  "data": [
    { value: ~~(random() * 1000), name: '顺差让利' },
    { value: ~~(random() * 1000), name: '分期合约' },
    { value: ~~(random() * 1000), name: '金币合约' },
  ]
});
mock('/api/SalesVolumeMonitoring/TerminalActivitySalesStructure?type=month', 'get', {
  "code": 1000,
  "data": [
    { value: ~~(random() * 100), name: '顺差让利' },
    { value: ~~(random() * 100), name: '分期合约' },
    { value: ~~(random() * 100), name: '金币合约' },
  ]
});
mock('/api/SalesVolumeMonitoring/TerminalActivitySalesStructure?type=day', 'get', {
  "code": 1000,
  "data": [
    { value: ~~(random() * 10), name: '顺差让利' },
    { value: ~~(random() * 10), name: '分期合约' },
    { value: ~~(random() * 10), name: '金币合约' },
  ]
});
const ramdomArr = () => ' '.repeat(25).split(' ').map((_item, index) => ({ label: String.fromCharCode(index + 65), id: index }));
mock(/\/api\/getAddressList.*/, 'get', {
  "code": 1000,
  "data": ramdomArr()
});
