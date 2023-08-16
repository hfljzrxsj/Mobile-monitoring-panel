/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
import * as React from 'react';
import {
  type ReactElement,
  useState
} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CheckBox from '@mui/material/Checkbox';
import styleModule from '../style/TextAnnotation.module.scss';
export default function TextAnnotationLeft (): ReactElement {

  const [
    text,
    setText
  ] = useState(''),
    [
      isEditing,
      setIsEditing
    ] = useState(false),
    textToLine = (text: string) => text.split('\n').map((value, index) => <p
      key={index}
      style={{
        'height': `${value.length === 0
          ? '1.4em'
          : 'auto'}`
      }}
    >
      {value}
    </p>);
  return (
    <React.StrictMode>
      <div
        className={styleModule['text-annotation-left']}
      >
        <CheckBox
          checked={isEditing}
          onChange={(event) => {

            setIsEditing(event.target.checked);

          }}
        />

        <Box
          sx={{
            'border': '1px solid black'
          }}
        >

          {isEditing
            ? <TextField
              fullWidth
              multiline
              onChange={(event) => {

                setText(event.target.value);

              }}
              value={text}
            />

            : <div
              className={styleModule['text-annotation-left__text']}
            >
              {textToLine(text)}
            </div>}
        </Box>
      </div>
    </React.StrictMode>

  );

}
