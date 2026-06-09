import React from 'react';

/**
 * Badge — small pill label used for tags, statuses and tech stacks.
 * Five tones map to the brand palette. Use sparingly; rows of badges
 * sit under headings and inside job cards.
 */
export function Badge({ children, tone = 'blue', style = {}, ...rest }) {
  const tones = {
    blue:  { background: 'var(--blue-100)', border: '1px solid var(--blue-200)', color: 'var(--blue-500)' },
    pink:  { background: 'var(--pink-100)', border: '1px solid var(--pink-200)', color: 'var(--pink-600)' },
    cyan:  { background: 'var(--cyan-100)', border: '1px solid var(--cyan-200)', color: 'var(--cyan-600)' },
    green: { background: 'var(--green-100)', border: '1px solid var(--green-200)', color: 'var(--green-600)' },
    amber: { background: 'var(--amber-100)', border: '1px solid var(--amber-200)', color: 'var(--amber-600)' },
    gray:  { background: 'var(--surface-2)', border: '1px solid var(--border-2)', color: 'var(--ink-500)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-2xs)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-wide)',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
