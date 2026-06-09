import * as React from 'react';

/**
 * Primary action button for the KTC × FPT Coffee Chat brand.
 * @startingPoint section="Core" subtitle="Solid, outline & ghost buttons with arrow option" viewport="700x200"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'navy' | 'accent' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Renders as an anchor when set */
  href?: string;
  /** Append a → glyph */
  arrow?: boolean;
  disabled?: boolean;
  /** Stretch to container width */
  full?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
