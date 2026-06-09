import React from 'react';

/**
 * Card — base white surface with a hairline border and soft radius.
 * `hover` adds a blue-tinted lift on mouseover. Use as the container
 * for feature blocks, company panels, etc.
 */
export function Card({ children, hover = false, pad = 'var(--space-7)', style = {}, ...rest }) {
  const handleEnter = (e) => {
    if (!hover) return;
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    e.currentTarget.style.borderColor = 'var(--blue-200)';
  };
  const handleLeave = (e) => {
    if (!hover) return;
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--color-border)';
  };
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: pad,
        transition: 'box-shadow var(--dur-normal), border-color var(--dur-normal)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * FeatureCard — icon glyph + title + short description. Compact tile
 * used in the "Về Coffee Chat" grid.
 */
export function FeatureCard({ icon, title, desc, style = {} }) {
  return (
    <Card hover pad="var(--space-5)" style={{ background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', ...style }}>
      {icon && <div style={{ fontSize: '24px', marginBottom: '10px', lineHeight: 1 }}>{icon}</div>}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-bold)',
        color: 'var(--text-heading)',
        marginBottom: '4px',
      }}>{title}</div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-normal)',
      }}>{desc}</div>
    </Card>
  );
}
