'use strict';
import * as React from 'react';
import Level from './Level';
import styleModule from './Building.module.scss';
declare module 'react' {
  interface CSSProperties {
    [key: string]: unknown;
  }
}
interface Props {
  level: number;
}


export default function Building(props: Props): JSX.Element {
  const LevelList = [];
  const height = '50px';
  for (let i = 0; i < props.level; i++) {
    LevelList.push(<>
      <tr>
        <td>
          <Level key={i} index={i + 1} />
        </td>
      </tr>
    </>);
  }
  return (
    <React.StrictMode>
      <table
        style={{ '--height': `${height}` }}
        border={1}
        cellPadding={0}
        cellSpacing={0}
        className={styleModule.Building}
      >
        {LevelList}</table>
    </React.StrictMode>
  );
}