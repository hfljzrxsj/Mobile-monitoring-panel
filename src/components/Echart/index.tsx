import echartsConstructor, { type data } from "@/echarts";
import { CircularProgress } from "@mui/material";
import * as classNames from "classnames";
import { useRef, useEffect } from "react";
import style from './_index.module.scss';

export default function EchartsElement (props: { readonly data: void | data | undefined; readonly loading: boolean; }) {
  const { data, loading = false } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { current } = ref;
  const noDataOrLoading = loading || !data;
  useEffect(() => {
    setTimeout(() => {
      if ((current || ref.current) && data) {
        // for (const i of current.attributes) {
        //   const { name } = i;
        //   if (name !== 'class')
        //     current.removeAttribute(name);
        // }
        // for (const i of current.childNodes) {
        //   i.remove();
        // }
        try {
          echartsConstructor({
            dom: current ?? ref.current ?? document.createElement('div'), data
          });
        }
        catch (e) {
          console.error(e);
        }
      }
    });
  }, [current, data]);
  //@ts-expect-error
  return (<div
    ref={ref}
    className={classNames(style["echarts"], noDataOrLoading ? style['loading'] : style["noLoading"])}
    {...(current && { style: { '--offsetTop': `${current?.offsetTop}px` } })} >{noDataOrLoading && <CircularProgress />}</div>
  );
};