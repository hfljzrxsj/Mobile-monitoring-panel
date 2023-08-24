import * as React from 'react';
import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import CheckBox from '@mui/material/Checkbox';
import styleModule from '../style/TextAnnotation.module.scss';
export default function TextAnnotationRight (): ReactElement {

  const [
    isEditing,
    setIsEditing
  ] = useState(false);
  return (
    <React.StrictMode>
      <div
        className={styleModule['text-annotation-right']}
      >
        <CheckBox
          checked={isEditing}
          // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
          onChange={(event): void => {

            setIsEditing(event.target.checked);

          }}

        />

        <div
          contentEditable={isEditing}
        />
      </div>
    </React.StrictMode>

  );

}
