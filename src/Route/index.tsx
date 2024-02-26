import {
  Route, Routes, type RouteObject,
  // createHashRouter, useRoutes
} from 'react-router-dom';
import type { RRNstring } from '@/types';
import MainFrame from '@/pages';
import Login from '@/pages/Login';
import Overview from '@/pages/Overview';
// import DistributionOfTerminalSales from '@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales';
import TerminalActivitySalesStructure from '@/pages/SalesVolumeMonitoring/TerminalActivitySalesStructure';
import SalesStructureOfTerminalPriceRanges from '@/pages/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges';
import TOP10ModelInformation from '@/pages/SalesVolumeMonitoring/TOP10ModelInformation';
// import QualityOfTerminalSalesInThePanAlliance from '@/pages/SalesVolumeMonitoring/QualityOfTerminalSalesInThePanAlliance';
import SalesSituationOfTerminalSubChannels from '@/pages/SalesVolumeMonitoring/SalesSituationOfTerminalSubChannels';
import OrderQuantityOfMobileTerminals from '@/pages/PurchaseQuantityMonitoring/OrderQuantityOfMobileTerminals';
import InventoryQuantity from '@/pages/InventoryMonitoring/InventoryQuantity';
import InventoryStructure from '@/pages/InventoryMonitoring/InventoryStructure';
import { lazy, Suspense } from 'react';
// import { renderRoutes } from 'react-router-config';

export enum pathString {
  login = 'login',
  auth = 'auth',
  overview = 'overview',
  SalesVolumeMonitoring = 'SalesVolumeMonitoring',
  DistributionOfTerminalSales = 'DistributionOfTerminalSales',
  TerminalActivitySalesStructure = 'TerminalActivitySalesStructure',
  SalesStructureOfTerminalPriceRanges = 'SalesStructureOfTerminalPriceRanges',
  TOP10ModelInformation = 'TOP10ModelInformation',
  QualityOfTerminalSalesInThePanAlliance = 'QualityOfTerminalSalesInThePanAlliance',
  SalesSituationOfTerminalSubChannels = 'SalesSituationOfTerminalSubChannel',
  PurchaseQuantityMonitoring = 'PurchaseQuantityMonitoring',
  OrderQuantityOfMobileTerminals = 'OrderQuantityOfMobileTerminals',
  InventoryMonitoring = 'InventoryMonitoring',
  InventoryQuantity = 'InventoryQuantity',
  InventoryStructure = 'InventoryStructure',
}
// export const menuItem = freeze({
//   pathString.overview]: '总览',
//   pathString.SalesVolumeMonitoring]: {
//     name: '销量数据监控', list: {
//       pathString.DistributionOfTerminalSales]: '终端销量分布',
//       pathString.TerminalActivitySalesStructure]: '终端活动销售结构',
//       pathString.SalesStructureOfTerminalPriceRanges]: '终端各价位段销售结构',
//       pathString.TOP10ModelInformation]: 'TOP10机型信息',
//       pathString.QualityOfTerminalSalesInThePanAlliance]: '泛全联盟终端销售质量',
//       pathString.SalesSituationOfTerminalSubChannels]: '终端分渠道销售情况',
//     },
//   },
//   pathString.PurchaseQuantityMonitoring]: {
//     name: '进货量监控', list: {
//       pathString.OrderQuantityOfMobileTerminals]: '手机终端订货数量'
//     }
//   },
//   pathString.InventoryMonitoring]: {
//     name: '库存量监控', list: {
//       pathString.InventoryQuantity]: '库存数量',
//       pathString.InventoryStructure]: '库存结构',
//     }
//   },
// });
// export interface menuItem extends NonIndexRouteObject {
//   readonly id: RRNstring;
// }
const DistributionOfTerminalSales = lazy(() => import('@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales'));
export const menuItems: Array<RouteObject> = ([
  { path: '', id: '目录', element: <Overview /> },
  {
    path: pathString.SalesVolumeMonitoring, id: '终端销量分布', children: [
      {
        path: pathString.DistributionOfTerminalSales, id: '终端销量分布', element: <Suspense fallback={<></>}>
          <DistributionOfTerminalSales />
        </Suspense>,
        // lazy: () => import('@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales')
      },
      { path: pathString.TerminalActivitySalesStructure, id: '终端活动销售结构', element: <TerminalActivitySalesStructure /> },
      { path: pathString.SalesStructureOfTerminalPriceRanges, id: '终端各价位段销售结构', element: <SalesStructureOfTerminalPriceRanges /> },
      { path: pathString.TOP10ModelInformation, id: 'TOP10机型信息', element: <TOP10ModelInformation /> },
      // { path: pathString.QualityOfTerminalSalesInThePanAlliance, id: '泛全联盟终端销售质量', element: <QualityOfTerminalSalesInThePanAlliance /> },
      { path: pathString.SalesSituationOfTerminalSubChannels, id: '终端分渠道销售情况', element: <SalesSituationOfTerminalSubChannels /> },
    ]
  },
  {
    path: pathString.PurchaseQuantityMonitoring, id: '进货量监控', children: [
      { path: pathString.OrderQuantityOfMobileTerminals, id: '手机终端订货数量', element: <OrderQuantityOfMobileTerminals /> }
    ]
  },
  {
    path: pathString.InventoryMonitoring, id: '库存量监控', children: [
      { path: pathString.InventoryQuantity, id: '库存TOP10机型', element: <InventoryQuantity /> },
      { path: pathString.InventoryStructure, id: '分机型价位段结构', element: <InventoryStructure /> },
    ]
  },
]);
export const concatUrl = (...args: ReadonlyArray<RRNstring>) => (`/${args.join('/')}`);
// const UseRoutes = () => useRoutes(menuItems);
export default function MyRoute () {
  // const isLogin = true;
  // if (!isLogin) {
  //   return <Navigate to={concatUrl(pathString.login)} />;
  // }
  // return <UseRoutes />;
  return (
    <Routes>
      <Route
        path={pathString.login}
        element={<Login />}
      />
      <Route
        path='/'
        element={<MainFrame />}
      >
        {
          menuItems.map((item, index) => (
            <Route key={index} path={item.path ?? ''} element={item.element}
            >
              {
                item.children?.map((child, index) =>
                  <Route key={index} path={child.path ?? ''} element={child.element}
                  // loader={e => {
                  //   console.log(e);
                  //   return e;
                  // }}
                  // action={e => {
                  //   console.log(e);
                  //   return e;
                  // }}
                  // shouldRevalidate={e => {
                  //   console.log(e);
                  //   return Boolean(e);
                  // }}
                  />
                )
              }
            </Route>
          ))
        }
        {/* {renderRoutes(menuItems)} */}
      </Route>
    </Routes>
  );
}