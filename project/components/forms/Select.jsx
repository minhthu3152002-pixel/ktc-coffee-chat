import React from 'react';
import { fieldLabelStyle, fieldControlStyle, applyFocus, clearFocus } from './Input.jsx';

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath stroke='%236B7280' stroke-width='1.5' fill='none' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")";

/**
 * Select — labelled dropdown matching Input styling, with a custom chevron.
 * Pass an array of option strings, or children <option> nodes.
 */
export function Select({ label, required = false, id, options, placeholder = 'Chọn', value, style = {}, children, ...rest }) {
  return (
    <div style={{ ...style }}>
      {label && (
        <label htmlFor={id} style={fieldLabelStyle}>
          {label}{required && ' *'}
        </label>
      )}
      <select
        id={id}
        defaultValue={value !== undefined ? undefined : ''}
        value={value}
        style={{
          ...fieldControlStyle,
          cursor: 'pointer',
          backgroundImage: chevron,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '36px',
        }}
        onFocus={applyFocus}
        onBlur={clearFocus}
        {...rest}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options
          ? options.map((o) => <option key={o} value={o}>{o}</option>)
          : children}
      </select>
    </div>
  );
}
