import * as React from 'react';

/**
 * Icon tile + label row for event details (date, time, location, capacity).
 */
export interface MetaItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export function MetaItem(props: MetaItemProps): JSX.Element;
