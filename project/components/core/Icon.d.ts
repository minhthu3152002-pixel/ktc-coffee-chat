import * as React from 'react';

export type IconName =
  | 'target' | 'chat' | 'globe' | 'timer'
  | 'clock' | 'calendar' | 'monitor' | 'users' | 'arrow';

/**
 * Gradient duotone "glassy" icon — deep brand-blue base with a translucent
 * mint→cyan glass overlay. Used in hero meta rows and feature cards.
 * @startingPoint section="Core" subtitle="Gradient duotone glassy icon set" viewport="700x200"
 */
export interface IconProps {
  /** Which glyph to render. @default "target" */
  name?: IconName;
  /** Pixel size (square). @default 32 */
  size?: number;
  style?: React.CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;
