import * as React from 'react';
import {
  type ReactElement,
  StrictMode,
  useState
} from 'react';
import TextAnnotationDetail from './TextAnnotationDetail';

import styleModule from '../style/TextAnnotation.module.scss';


/**
+ * Renders a text annotation component.
+ *
+ * @return {ReactElement} The rendered text annotation component.
+ */
export default function TextAnnotation (): ReactElement {


  return (
    <StrictMode>
      <div
        className={styleModule['text-annotation']}
      >

        <TextAnnotationDetail
          classNameString="text-annotation-left"
        />

        <TextAnnotationDetail
          classNameString="text-annotation-right"
        />
      </div>
    </StrictMode>

  );

}
