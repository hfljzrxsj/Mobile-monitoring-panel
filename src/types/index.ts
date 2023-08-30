import type { Component, ReactElement } from 'react';
type RRN_<T> = Readonly<Required<NonNullable<T>>>;
type RRN_Boolean = RRN_<boolean>;
type RRN_String = RRN_<string>;
type RRN_Number = RRN_<number>;
type RRN_Object = RRN_<object>;
type RRN_Component = new () => RRN_<Component>;
type RRN_ReactElementGenericity<T> = RRN_<ReactElement<T, RRN_Component>>;
type anyReactElementGenericity = RRN_ReactElementGenericity<RRN_Object>;
// eslint-disable-next-line camelcase
export type {
  RRN_,
  RRN_Boolean as RRNboolean,
  RRN_String as RRNstring,
  RRN_Number as RRNnumber,
  RRN_ReactElementGenericity as RRNReactElementGenericity,
  anyReactElementGenericity
};
