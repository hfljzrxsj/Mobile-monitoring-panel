import React, {
  useEffect,
  useState,
  createContext,
  useLayoutEffect,
  type ReactElement
} from 'react';
import { createBrowserRouter, Navigate, Outlet, Route, Routes, type IndexRouteObject, type NonIndexRouteObject, type RouteObject } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RRNstring } from '@/types';
import MainFrame from '@/pages';
import Login from '@/pages/Login';
import Overview from '@/pages/Overview';
import DistributionOfTerminalSales from '@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales';
import TerminalActivitySalesStructure from '@/pages/SalesVolumeMonitoring/TerminalActivitySalesStructure';

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
export interface menuItem extends NonIndexRouteObject {
  readonly id: RRNstring;
}
export const menuItems: Array<RouteObject> = ([
  { path: '', id: '总览', element: <Overview /> },
  {
    path: pathString.SalesVolumeMonitoring, id: '终端销量分布', children: [
      { path: pathString.DistributionOfTerminalSales, id: '终端销量分布', element: <DistributionOfTerminalSales /> },
      { path: pathString.TerminalActivitySalesStructure, id: '终端活动销售结构', element: <TerminalActivitySalesStructure /> },
      { path: pathString.SalesStructureOfTerminalPriceRanges, id: '终端各价位段销售结构' },
      { path: pathString.TOP10ModelInformation, id: 'TOP10机型信息' },
      { path: pathString.QualityOfTerminalSalesInThePanAlliance, id: '泛全联盟终端销售质量' },
      { path: pathString.SalesSituationOfTerminalSubChannels, id: '终端分渠道销售情况' },
    ]
  },
  {
    path: pathString.PurchaseQuantityMonitoring, id: '进货量监控', children: [
      { path: pathString.OrderQuantityOfMobileTerminals, id: '手机终端订货数量' }
    ]
  },
  {
    path: pathString.InventoryMonitoring, id: '库存量监控', children: [
      { path: pathString.InventoryQuantity, id: '库存数量' },
      { path: pathString.InventoryStructure, id: '库存结构' },
    ]
  },
]);
export const concatUrl = (...args: ReadonlyArray<RRNstring>) => (`/${args.join('/')}`);
export default function MyRoute () {
  const isLogin = true;
  if (!isLogin) {
    return <Navigate to={concatUrl(pathString.login)} />;
  }
  return (
    <Routes>
      <Route
        path={pathString.login}
        element={<Login />}
      />
      <Route
        path='/'
        element={<MainFrame />}
      >{
          menuItems.map(item => (
            <Route key={item.id} path={item.path ?? ''} element={item.element} >
              {
                item.children?.map(child =>
                  <Route key={child.id} path={child.path ?? ''} element={child.element} />
                )
              }
            </Route>
          ))
        }
      </Route>
    </Routes>
  );
}