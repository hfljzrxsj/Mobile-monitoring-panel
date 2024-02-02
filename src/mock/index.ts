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