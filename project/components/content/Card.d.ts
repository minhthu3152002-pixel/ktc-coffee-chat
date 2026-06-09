import * as React from 'react';

/**
 * Base white surface card with hairline border and soft radius.
 */
export interface CardProps {
  children: React.ReactNode;
  /** Adds a blue-tinted lift on hover. @default false */
  hover?: boolean;
  /** Padding (CSS value). @default "var(--space-7)" */
  pad?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

/**
 * Compact icon + title + description tile.
 */
export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  desc: React.ReactNode;
  style?: React.CSSProperties;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
