import * as PropTypes from 'prop-types';
import * as React from 'react';
import type {
  RRNReactElementGenericity,
  RRN_,
  // RRNboolean,
  RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types';
import {
  type ReactNode
} from 'react';
import styleModule from '../style/TextAnnotation.module.scss';
interface TextAnnotationSideProps {
  readonly lineNum: RRNnumber;
  readonly classNameString: RRNstring;
}
type RRN_TextAnnotationSideProps = RRN_<TextAnnotationSideProps>;
export default function TextAnnotationSide (props: RRN_TextAnnotationSideProps): RRNReactElementGenericity<RRN_TextAnnotationSideProps> {

  const one = 1,
    { lineNum,
      classNameString = '' } = props;

  return (
    <React.StrictMode>
      <div
        className={styleModule[classNameString]}
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
TextAnnotationSide.propTypes = {
  'classNameString': PropTypes.string,
  'lineNum': PropTypes.number
};
TextAnnotationSide.defaultProps = {
  'classNameString': '',
  'lineNum': 1
};
