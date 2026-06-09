import React from 'react';

/**
 * MetaItem — icon tile + label row. Used for event details (date, time,
 * location, capacity) in the hero.
 */
export function MetaItem({ icon, children, style = {} }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      ...style,
    }}>
      <div style={{
        width: '38px',
        height: '38px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-100)',
        border: '1px solid var(--blue-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        flexShrink: 0,
      }}>{icon}</div>
      <span>{children}</span>
    </div>
  );
}
