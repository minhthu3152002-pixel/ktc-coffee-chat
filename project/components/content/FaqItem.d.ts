import * as React from 'react';

/**
 * Accordion FAQ row. Click the question to reveal the answer; the + glyph
 * rotates to ×.
 */
export interface FaqItemProps {
  q: React.ReactNode;
  a: React.ReactNode;
  defaultOpen?: boolean;
}
export function FaqItem(props: FaqItemProps): JSX.Element;
