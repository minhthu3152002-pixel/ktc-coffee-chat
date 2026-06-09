import * as React from 'react';

/**
 * Labelled text input. Uppercase micro-label, soft inset field, blue focus ring.
 * @startingPoint section="Forms" subtitle="Labelled text, select & textarea fields" viewport="700x420"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label rendered above the control */
  label?: string;
  /** Appends " *" to the label */
  required?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
