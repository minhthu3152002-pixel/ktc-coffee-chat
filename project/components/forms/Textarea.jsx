import React from 'react';
import { fieldLabelStyle, fieldControlStyle, applyFocus, clearFocus } from './Input.jsx';

/**
 * Textarea — labelled multi-line field. Vertically resizable, min 80px.
 */
export function Textarea({ label, required = false, id, rows = 3, style = {}, ...rest }) {
  return (
    <div style={{ ...style }}>
      {label && (
        <label htmlFor={id} style={fieldLabelStyle}>
          {label}{required && ' *'}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        style={{
          ...fieldControlStyle,
          resize: 'vertical',
          minHeight: '80px',
          lineHeight: 'var(--lh-relaxed)',
        }}
        onFocus={applyFocus}
        onBlur={clearFocus}
        {...rest}
      />
    </div>
  );
}
