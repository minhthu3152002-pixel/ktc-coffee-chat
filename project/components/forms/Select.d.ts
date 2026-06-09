import * as React from 'react';

/**
 * Labelled dropdown with a custom chevron, matching Input.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  id?: string;
  /** Option strings; alternatively pass <option> children */
  options?: string[];
  /** Disabled first option shown when nothing selected. @default "Chọn" */
  placeholder?: string;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
