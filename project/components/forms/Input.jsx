import React from 'react';

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-2xs)',
  fontWeight: 'var(--fw-bold)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '6px',
};

const controlStyle = {
  width: '100%',
  background: 'var(--color-bg)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--ink-800)',
  transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  appearance: 'none',
  outline: 'none',
};

function applyFocus(e) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.background = 'var(--white)';
  e.currentTarget.style.boxShadow = 'var(--focus-ring)';
}
function clearFocus(e) {
  e.currentTarget.style.borderColor = 'var(--color-border)';
  e.currentTarget.style.background = 'var(--color-bg)';
  e.currentTarget.style.boxShadow = 'none';
}

/**
 * Input — labelled text field. Required fields use a * in the label.
 */
export function Input({ label, required = false, id, style = {}, ...rest }) {
  return (
    <div style={{ ...style }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && ' *'}
        </label>
      )}
      <input
        id={id}
        style={controlStyle}
        onFocus={applyFocus}
        onBlur={clearFocus}
        {...rest}
      />
    </div>
  );
}

export { labelStyle as fieldLabelStyle, controlStyle as fieldControlStyle, applyFocus, clearFocus };
