import * as React from 'react';

/**
 * Small pill label for tags, statuses and tech stacks.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** Color tone. @default "blue" */
  tone?: 'blue' | 'pink' | 'cyan' | 'green' | 'amber' | 'gray';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
