import React from 'react';

/**
 * Eyebrow — uppercase, letter-spaced micro-label in brand blue.
 * Sits above section titles.
 */
export function Eyebrow({ children, color = 'var(--color-primary)', style = {} }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-2xs)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * SectionHeading — eyebrow + display title + optional lead paragraph.
 * The standard top-of-section block used across the landing page.
 */
export function SectionHeading({ eyebrow, title, desc, align = 'left', style = {} }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? '640px' : undefined, marginInline: align === 'center' ? 'auto' : undefined, ...style }}>
      {eyebrow && <Eyebrow style={{ marginBottom: '12px' }}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-h1)',
          fontWeight: 'var(--fw-extrabold)',
          color: 'var(--text-heading)',
          lineHeight: 'var(--lh-snug)',
          letterSpacing: 'var(--ls-tight)',
          marginBottom: desc ? '14px' : 0,
        }}>
          {title}
        </h2>
      )}
      {desc && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-lead)',
          color: 'var(--text-body)',
          lineHeight: 'var(--lh-relaxed)',
          maxWidth: '580px',
          marginInline: align === 'center' ? 'auto' : undefined,
        }}>
          {desc}
        </p>
      )}
    </div>
  );
}
