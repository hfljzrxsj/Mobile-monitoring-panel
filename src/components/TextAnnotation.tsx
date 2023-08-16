import * as React from 'react';
import {
  type ReactElement,
  StrictMode
} from 'react';
import TextAnnotationLeft from './TextAnnotationLeft';
import TextAnnotationRight from './TextAnnotationRight';
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
        <TextAnnotationLeft />

        <TextAnnotationRight />
      </div>
    </StrictMode>

  );

}
