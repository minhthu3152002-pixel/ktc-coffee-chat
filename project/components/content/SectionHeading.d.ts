import * as React from 'react';

/**
 * Uppercase, letter-spaced micro-label in brand blue. Sits above titles.
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** @default "var(--color-primary)" */
  color?: string;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;

/**
 * Standard section header: eyebrow + display title + optional lead.
 * @startingPoint section="Content" subtitle="Eyebrow + title + lead section header" viewport="700x220"
 */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
