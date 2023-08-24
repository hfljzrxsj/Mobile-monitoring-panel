import * as PropTypes from 'prop-types';
import * as React from 'react';

import {
  type ReactElement,
  type ReactNode
} from 'react';
import styleModule from '../style/TextAnnotation.module.scss';
interface TextAnnotationSideProps {
  readonly lineNum: number;
}
export default function TextAnnotationSide (props: TextAnnotationSideProps): ReactElement {

  const one = 1,
    { lineNum } = props;

  return (
    <React.StrictMode>
      <div
        className={styleModule['textAnnotationSide']}
      >
        {((): ReactNode => {

          const result = [];
          for (let index = one; index <= lineNum; index += one) {

            result.push(
              <div
                key={index}
              >
                {index}
              </div>
            );

          }
          return result;

        })()}
      </div>

    </React.StrictMode>
  );

}
