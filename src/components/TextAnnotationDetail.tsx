/* eslint-disable react/jsx-max-depth */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  type CSSProperties,
  type ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';
import CheckBox from '@mui/material/Checkbox';
import TextAnnotationLine from './TextAnnotationLine';
import styleModule from '../style/TextAnnotation.module.scss';
interface TextAnnotationDetailProps {
  readonly classNameString?: string;
}
export default function TextAnnotationDetail (props: TextAnnotationDetailProps): ReactElement {

  const zero = 0,
    // eslint-disable-next-line sort-vars, no-magic-numbers, @typescript-eslint/no-magic-numbers, @typescript-eslint/prefer-readonly-parameter-types
    computedStyle = (current: Readonly<HTMLDivElement>, str: 'fontSize' | 'height'): number => ~~getComputedStyle(current)[str].slice(zero, -2),
    // eslint-disable-next-line sort-vars
    divRef = useRef<HTMLDivElement>(null),
    // eslint-disable-next-line sort-vars
    getLineNum = (): number => {

      const { current } = divRef;
      if (!current) {

        return zero;

      }
      // eslint-disable-next-line one-var
      const fontSize = computedStyle(current, 'fontSize'),
        height = computedStyle(current, 'height'),
        // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
        onePointfourfontSize = 1.4 * fontSize,
        // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
        result = Math.round(height / (onePointfourfontSize - 1.6));
      return result;

    },
    [
      lineNum,
      setLineNum
    ] = useState(
      zero
    ),
    {
      'classNameString': className = ''
    } = props,
    [
      isEditing,
      setIsEditing
    ] = useState(false);
  // useEffect(
  //   () => {

  //     (async (): Promise<void> => (await
  //       fetch('/api/api.json')).json().then((data) => {

  //         // eslint-disable-next-line no-console
  //         console.log(data);

  //       })
  //     )().catch(() => {

  //       throw new Error();

  //     });

  //   }
  //   , []);

  return (
    <div
      className={styleModule[className]}
    >
      <CheckBox
        checked={isEditing}
        // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
        onChange={(event): void => {

          setIsEditing(event.target.checked);
          setLineNum(getLineNum());

        }}
      />

      <div
        style={{ '--fontSize': sessionStorage.getItem('fontSize') ?? '16px' } as CSSProperties}
      >
        <TextAnnotationLine
          lineNum={lineNum}
        />

        <div
          className={styleModule['text-annotation-text']}
          contentEditable={isEditing}
          ref={divRef}
        />

        <TextAnnotationLine
          lineNum={lineNum}
        />
      </div>
    </div>
  );

}
TextAnnotationDetail.defaultProps = {
  'classNameString': ''
};
TextAnnotationDetail.prototype = {
  'classNameString': PropTypes.string
};
