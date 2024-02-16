
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import SnackBarReducer from './SnackBarRuducer';
import AppBarTitleReducer from './AppBarTitleRuducer';
import type { RRN_ } from '@/types';
export interface actionInterface<T = {}, D = {}> {
  readonly type: RRN_<D>;
  readonly payload?: T;
}
enum ReducerName {
  SnackBar = 'SnackBar',
  AppBarTitle = 'AppBarTitle',
}
export type TypedUseSelectorHookState<T> = {
  [x in ReducerName]: T;
};
const reducer = combineReducers({
  [ReducerName.SnackBar]: SnackBarReducer,
  [ReducerName.AppBarTitle]: AppBarTitleReducer
});
const rootReducer = createStore(reducer, applyMiddleware(thunk));
// rootReducer.dispatch({ type: enumActionName.OPENTRUE });

rootReducer.subscribe(() => {
  console.log(rootReducer.getState());
  // rootReducer.replaceReducer();
});

export default rootReducer;