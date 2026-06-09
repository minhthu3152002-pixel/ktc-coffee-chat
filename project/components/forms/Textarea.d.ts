import * as React from 'react';

/**
 * Labelled multi-line text field, vertically resizable.
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  id?: string;
  /** @default 3 */
  rows?: number;
  style?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
