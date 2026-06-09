import React from 'react';

/**
 * FaqItem — accordion row. Click the question to toggle the answer.
 * The toggle glyph rotates 45° from + to ×.
 */
export function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          cursor: 'pointer',
          userSelect: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-h4)',
          fontWeight: 'var(--fw-semibold)',
          color: 'var(--text-heading)',
        }}
      >
        {q}
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: open ? 'var(--color-primary)' : 'var(--blue-100)',
          color: open ? 'var(--white)' : 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: '16px',
          lineHeight: 1,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'all var(--dur-normal) var(--ease)',
        }}>+</div>
      </div>
      {open && (
        <div style={{
          padding: '14px 20px 18px',
          borderTop: '1px solid var(--color-border)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-sm)',
          color: 'var(--text-body)',
          lineHeight: 'var(--lh-relaxed)',
        }}>
          {a}
        </div>
      )}
    </div>
  );
}
